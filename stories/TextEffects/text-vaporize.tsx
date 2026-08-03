// Text Vaporize
// Using component defaults.

"use client";

import {
    useRef,
    useEffect,
    useState,
    createElement,
    useMemo,
    useCallback,
    memo,
} from "react";

import {
    TAGS,
    durationOf,
    delayOf,
    makeEase,
    resolveVaporizeProps,
    stepOutPhase,
    stepInPhase,
    stepHoldPhase,
    handleFontChange,
    type VaporizeTextCycleProps,
    type PhaseRefs,
    type PhaseStepArgs,
} from "./text-vaporize-engine";
import {
    renderCanvas,
    renderParticles as renderParticlesToCanvas,
    calculateVaporizeSpread,
    transformValue,
} from "./text-vaporize-particles";

/** In-view flag from a plain IntersectionObserver */
function useInView(ref: any, margin = "50px") {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") return;
        const io = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { rootMargin: margin }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [ref, margin]);
    return inView;
}

// One rAF loop drives the whole cycle: disappear → appear → hold → repeat.
// Split out of the component so VaporizeTextCycle itself stays orchestration.
function useVaporizeAnimationLoop({
    isInView,
    canvasRef,
    particlesRef,
    liveRef,
    refs,
    setCurrentTextIndex,
    renderParticles,
}: {
    isInView: boolean;
    canvasRef: any;
    particlesRef: any;
    liveRef: any;
    refs: PhaseRefs;
    setCurrentTextIndex: (updater: (prev: number) => number) => void;
    renderParticles: (ctx: any, particles: any, canvas: any) => void;
}) {
    useEffect(() => {
        if (!isInView) return;
        let lastTime = performance.now();
        let frameId: number;
        const animate = (currentTime: number) => {
            const dt = Math.min((currentTime - lastTime) / 1e3, 0.1);
            lastTime = currentTime;
            const canvas = canvasRef.current as any;
            const ctx = canvas?.getContext("2d");
            const particles = particlesRef.current;
            if (!canvas || !ctx || !particles.length) {
                frameId = requestAnimationFrame(animate);
                return;
            }
            const live = liveRef.current;
            const t = live.timing;
            refs.phaseTimeRef.current += dt;

            const args: PhaseStepArgs = { ctx, canvas, particles, t, live, refs, setCurrentTextIndex, renderParticles };
            if (refs.phaseRef.current === "out") stepOutPhase(args);
            else if (refs.phaseRef.current === "in") stepInPhase(args);
            else stepHoldPhase(args);

            frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);
        return () => {
            if (frameId) cancelAnimationFrame(frameId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView, renderParticles]);
}

// Derives the memoized styles/timing/font config that don't belong to the
// rAF loop itself -- split out so VaporizeTextCycle only wires refs + JSX.
function useVaporizeConfig({ density, spread, disappear, appear, font }: any) {
    const transformedDensity = transformValue(density, [0, 10], [0.3, 1], true);
    const fontSizePx = parseInt(String(font.fontSize ?? "50").replace("px", ""));
    // Canvas cost is quadratic in this: at 1.5x a retina display the canvas held
    // 9x the pixels of a 1x one, and every frame walks that buffer. Cap it at 2.
    const globalDpr = useMemo(() => {
        if (typeof window === "undefined") return 1;
        return Math.min(2, window.devicePixelRatio || 1);
    }, []);
    // height:100% colapsa pra 0 quando o pai não tem altura definida (ex.:
    // card com min-h apenas) — o minHeight garante que o canvas sempre tenha
    // ao menos a altura da fonte pra desenhar.
    const wrapperStyle = useMemo<React.CSSProperties>(
        () => ({
            width: "100%",
            height: "100%",
            minHeight: `${fontSizePx}px`,
            pointerEvents: "none",
            position: "relative",
            overflow: "visible",
        }),
        [fontSizePx]
    );
    const canvasStyle = useMemo<React.CSSProperties>(
        () => ({
            position: "absolute",
            pointerEvents: "none",
        }),
        []
    );
    const timing = useMemo(
        () => ({
            outMode: disappear.mode ?? "particle",
            outOrder: disappear.order ?? "left-to-right",
            outDuration: Math.max(0.01, durationOf(disappear.transition, 2)),
            outEase: makeEase(disappear.transition?.ease),
            inMode: appear.mode ?? "opacity",
            inOrder: appear.order ?? "together",
            inDuration: Math.max(0.01, durationOf(appear.transition, 1)),
            inEase: makeEase(appear.transition?.ease),
            hold: Math.max(0, delayOf(disappear.transition, 0.5)),
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [JSON.stringify(disappear), JSON.stringify(appear)]
    );
    const fontConfig = useMemo(() => {
        const fontSize = fontSizePx;
        const VAPORIZE_SPREAD = calculateVaporizeSpread(fontSize);
        const MULTIPLIED_VAPORIZE_SPREAD = VAPORIZE_SPREAD * spread;
        return {
            fontSize,
            VAPORIZE_SPREAD,
            MULTIPLIED_VAPORIZE_SPREAD,
            font: `${font.fontWeight ?? 400} ${fontSize * globalDpr}px ${font.fontFamily}`,
        };
    }, [fontSizePx, font.fontWeight, font.fontFamily, spread, globalDpr]);
    const bufferRef = useRef<ImageData | null>(null);
    const memoizedRenderParticles = useCallback(
        (ctx: any, particles: any, canvas: any) => {
            renderParticlesToCanvas(ctx, particles, globalDpr, bufferRef, canvas);
        },
        [globalDpr]
    );

    return { transformedDensity, globalDpr, wrapperStyle, canvasStyle, timing, fontConfig, memoizedRenderParticles };
}

// Redraws the canvas whenever anything that changes its pixels changes, and
// swaps back in after a font-family change settles (web fonts load async).
function useVaporizeCanvasSync({ propsRef, canvasRef, wrapperSize, particlesRef, globalDpr, currentTextIndex, lastFontRef, sampleKey }: any) {
    useEffect(() => {
        renderCanvas({
            framerProps: propsRef.current,
            canvasRef,
            wrapperSize,
            particlesRef,
            globalDpr,
            currentTextIndex,
        });
        const currentFont = propsRef.current.font?.fontFamily || "sans-serif";
        return handleFontChange({
            currentFont,
            lastFontRef,
            props: propsRef.current,
            canvasRef,
            wrapperSize,
            particlesRef,
            globalDpr,
            currentTextIndex,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sampleKey]);
}

// ------------------------------------------------------------ //
// RESIZE OBSERVER
// ------------------------------------------------------------ //
const useResizeObserver = ({ wrapperRef, setWrapperSize }: any) => {
    useEffect(() => {
        const container = wrapperRef.current;
        if (!container || typeof ResizeObserver === "undefined") return;
        const ro = new ResizeObserver((entries) => {
            const rect = entries[0]?.contentRect;
            if (!rect) return;
            const width = Math.round(rect.width);
            const height = Math.round(rect.height);
            setWrapperSize((prev: any) =>
                prev.width === width && prev.height === height
                    ? prev
                    : { width, height }
            );
        });
        ro.observe(container);
        return () => ro.disconnect();
    }, [wrapperRef, setWrapperSize]);
};

// ------------------------------------------------------------ //
// WRAPPER SIZE
// ------------------------------------------------------------ //
const useWrapperSize = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [wrapperSize, setWrapperSize] = useState<{
        width: number | null;
        height: number | null;
    }>({ width: null, height: null });
    useEffect(() => {
        if (wrapperRef.current) {
            const rect = wrapperRef.current.getBoundingClientRect();
            setWrapperSize({ width: rect.width, height: rect.height });
        }
    }, [wrapperRef]);
    return { wrapperSize, setWrapperSize, wrapperRef };
};

// ------------------------------------------------------------ //
// SEO ELEMENT
// ------------------------------------------------------------ //
const SeoElement = memo(({ tag = "p", texts }: any) => {
    const style = useMemo<React.CSSProperties>(
        () => ({
            position: "absolute",
            width: "0",
            height: "0",
            overflow: "hidden",
            userSelect: "none",
            pointerEvents: "none",
        }),
        []
    );
    const safeTag = (TAGS as readonly string[]).includes(tag) ? tag : "p";
    return createElement(safeTag, { style }, texts?.join(" ") ?? "");
});
SeoElement.displayName = "SeoElement";

// ------------------------------------------------------------ //
// MAIN COMPONENT
// ------------------------------------------------------------ //
function VaporizeTextCycle(props: VaporizeTextCycleProps = {}) {
    const { texts, font, color, spread, density, appear, disappear, alignment, tag } = resolveVaporizeProps(props);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(wrapperRef, "50px");
    const lastFontRef = useRef<any>(null);
    const particlesRef = useRef<any[]>([]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    // Phase machine, kept in refs so the rAF loop never restarts mid-animation:
    // "in" (appear) → "hold" → "out" (disappear) → back to "in" with the next text.
    const phaseRef = useRef<"out" | "in" | "hold">("in");
    const phaseTimeRef = useRef(0); // seconds spent in the current phase
    const scatterArrRef = useRef<any>(null);
    const startsArrRef = useRef<any>(null);
    const startsKeyRef = useRef("");
    const holdDrawnRef = useRef(false);
    const { wrapperSize, setWrapperSize } = useWrapperSize();
    const { transformedDensity, globalDpr, wrapperStyle, canvasStyle, timing, fontConfig, memoizedRenderParticles } =
        useVaporizeConfig({ density, spread, disappear, appear, font });

    const liveRef = useRef<any>(null);
    liveRef.current = {
        timing,
        textCount: texts?.length ?? 1,
        spread: fontConfig.MULTIPLIED_VAPORIZE_SPREAD,
        density: transformedDensity,
        globalDpr,
    };

    useVaporizeAnimationLoop({
        isInView,
        canvasRef,
        particlesRef,
        liveRef,
        refs: { phaseRef, phaseTimeRef, scatterArrRef, startsArrRef, startsKeyRef, holdDrawnRef },
        setCurrentTextIndex,
        renderParticles: memoizedRenderParticles,
    });

    const sampleKey = [
        JSON.stringify(texts),
        font?.fontFamily,
        font?.fontSize,
        font?.fontWeight,
        color,
        alignment,
        spread,
        wrapperSize.width,
        wrapperSize.height,
        globalDpr,
        currentTextIndex,
    ].join("|");
    const liveProps = { texts, font, color, spread, density, appear, disappear, alignment, tag };
    const propsRef = useRef<any>(liveProps);
    propsRef.current = liveProps;
    useVaporizeCanvasSync({ propsRef, canvasRef, wrapperSize, particlesRef, globalDpr, currentTextIndex, lastFontRef, sampleKey });
    useResizeObserver({ wrapperRef, setWrapperSize });
    return (
        <div ref={wrapperRef} style={wrapperStyle}>
            <canvas ref={canvasRef} style={canvasStyle} />
            <SeoElement tag={tag} texts={texts} />
        </div>
    );
}

export { VaporizeTextCycle }
