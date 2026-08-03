// Text Vaporize
// Nucleo de orquestracao (tipos, easing, defaults, maquina de fases,
// troca de fonte) -- sem JSX/hooks, separado de text-vaporize.tsx.
// A fisica de particula/canvas em si mora em text-vaporize-particles.ts.

import {
    renderCanvas,
    updateParticles,
    localProgress,
    assignStarts,
    assignScatter,
    resetParticles,
} from "./text-vaporize-particles";

export interface VaporizeTextCycleFont {
    fontFamily: string;
    variant?: string;
    fontWeight?: number;
    fontSize?: number | string;
    lineHeight?: number;
    letterSpacing?: number;
    textAlign?: string;
}

export interface VaporizeTextCycleTransition {
    type?: string;
    duration?: number;
    ease?: string | number[];
    delay?: number;
}

export interface VaporizeTextCyclePhaseConfig {
    mode?: "particle" | "opacity";
    order?: "together" | "left-to-right" | "right-to-left";
    transition?: VaporizeTextCycleTransition;
}

export interface VaporizeTextCycleProps {
    texts?: string[];
    font?: VaporizeTextCycleFont;
    color?: string;
    spread?: number;
    density?: number;
    appear?: VaporizeTextCyclePhaseConfig;
    disappear?: VaporizeTextCyclePhaseConfig;
    alignment?: "left" | "center" | "right";
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
}

export const TAGS = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "span"] as const;

// ------------------------------------------------------------ //
// EASING
// ------------------------------------------------------------ //
const NAMED_EASES: Record<string, [number, number, number, number]> = {
    linear: [0, 0, 1, 1],
    easeIn: [0.42, 0, 1, 1],
    easeOut: [0, 0, 0.58, 1],
    easeInOut: [0.42, 0, 0.58, 1],
};

function cubicBezierEase(x1: number, y1: number, x2: number, y2: number) {
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;
    const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
    const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
    const dX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
    return (p: number) => {
        let t = p;
        for (let i = 0; i < 8; i++) {
            const x = sampleX(t) - p;
            const d = dX(t);
            if (Math.abs(x) < 1e-4 || Math.abs(d) < 1e-6) break;
            t -= x / d;
        }
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        return sampleY(t);
    };
}

export function makeEase(ease: any) {
    if (Array.isArray(ease) && ease.length === 4)
        return cubicBezierEase(ease[0], ease[1], ease[2], ease[3]);
    const b =
        (typeof ease === "string" && NAMED_EASES[ease]) || NAMED_EASES.easeOut;
    return cubicBezierEase(b[0], b[1], b[2], b[3]);
}

export const durationOf = (transition: any, fallback: number) =>
    typeof transition?.duration === "number" ? transition.duration : fallback;
export const delayOf = (transition: any, fallback: number) =>
    typeof transition?.delay === "number" ? transition.delay : fallback;

export const DEFAULT_PROPS: Required<
    Pick<
        VaporizeTextCycleProps,
        | "texts"
        | "font"
        | "color"
        | "spread"
        | "density"
        | "appear"
        | "disappear"
        | "alignment"
        | "tag"
    >
> = {
    texts: ["TEXT", "VAPORIZE"],
    font: {
        fontFamily: "Inter",
        variant: "Regular",
        fontWeight: 400,
        fontSize: 120,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "left",
    },
    color: "rgb(255, 255, 255)",
    spread: 20,
    density: 10,
    appear: {
        mode: "particle",
        order: "left-to-right",
        transition: { type: "tween", duration: 1, ease: "easeOut" },
    },
    disappear: {
        mode: "particle",
        order: "together",
        transition: {
            type: "tween",
            duration: 2,
            ease: "easeOut",
            delay: 0.5,
        },
    },
    alignment: "center",
    tag: "h1",
};

// Canvas exige cor concreta (não herda currentColor) — sem prop, segue o
// tema ativo pra não desenhar branco-sobre-branco no tema claro.
function defaultThemeColor() {
    if (typeof document !== "undefined" && !document.documentElement.classList.contains("dark")) {
        return "rgb(23, 23, 23)";
    }
    return DEFAULT_PROPS.color;
}

// Fills in every optional prop with its default -- kept out of the
// component so its own complexity isn't inflated by 9 `??` fallbacks.
export function resolveVaporizeProps(props: VaporizeTextCycleProps) {
    return {
        texts: props.texts ?? DEFAULT_PROPS.texts,
        font: props.font ?? DEFAULT_PROPS.font,
        color: props.color ?? defaultThemeColor(),
        spread: props.spread ?? DEFAULT_PROPS.spread,
        density: props.density ?? DEFAULT_PROPS.density,
        appear: props.appear ?? DEFAULT_PROPS.appear,
        disappear: props.disappear ?? DEFAULT_PROPS.disappear,
        alignment: props.alignment ?? DEFAULT_PROPS.alignment,
        tag: props.tag ?? DEFAULT_PROPS.tag,
    };
}

// ------------------------------------------------------------ //
// PHASE MACHINE — one step function per phase of the cycle:
// "in" (appear) → "hold" → "out" (disappear) → back to "in" with next text.
// ------------------------------------------------------------ //
export interface PhaseRefs {
    phaseRef: { current: "out" | "in" | "hold" };
    phaseTimeRef: { current: number };
    scatterArrRef: { current: any };
    startsArrRef: { current: any };
    startsKeyRef: { current: string };
    holdDrawnRef: { current: boolean };
}

export interface PhaseStepArgs {
    ctx: any;
    canvas: any;
    particles: any[];
    t: any;
    live: any;
    refs: PhaseRefs;
    setCurrentTextIndex: (updater: (prev: number) => number) => void;
    renderParticles: (ctx: any, particles: any, canvas: any) => void;
}

export function stepOutPhase({ ctx, canvas, particles, t, live, refs, setCurrentTextIndex, renderParticles }: PhaseStepArgs) {
    const p = Math.min(1, refs.phaseTimeRef.current / t.outDuration);
    const e = t.outEase(p);
    if (refs.startsArrRef.current !== particles || refs.startsKeyRef.current !== `out|${t.outOrder}`) {
        assignStarts(particles, canvas.textBoundaries, t.outOrder);
        refs.startsArrRef.current = particles;
        refs.startsKeyRef.current = `out|${t.outOrder}`;
    }
    const done = p >= 1;
    if (t.outMode === "particle") {
        updateParticles(particles, e, live.spread, live.density);
    } else {
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            particle.x = particle.originalX;
            particle.y = particle.originalY;
            const local = localProgress(e, particle.start);
            particle.opacity = particle.originalAlpha * (1 - local);
        }
    }
    renderParticles(ctx, particles, canvas);
    if (done) {
        setCurrentTextIndex((prev) => (prev + 1) % Math.max(1, live.textCount));
        refs.phaseRef.current = "in";
        refs.phaseTimeRef.current = 0;
        refs.scatterArrRef.current = null;
        refs.startsArrRef.current = null;
        refs.startsKeyRef.current = "";
    }
}

export function stepInPhase({ ctx, canvas, particles, t, live, refs, renderParticles }: PhaseStepArgs) {
    const p = Math.min(1, refs.phaseTimeRef.current / t.inDuration);
    const e = t.inEase(p);
    if (refs.startsArrRef.current !== particles || refs.startsKeyRef.current !== `in|${t.inOrder}`) {
        assignStarts(particles, canvas.textBoundaries, t.inOrder);
        refs.startsArrRef.current = particles;
        refs.startsKeyRef.current = `in|${t.inOrder}`;
    }
    if (t.inMode === "particle") {
        if (refs.scatterArrRef.current !== particles) {
            assignScatter(particles, live.spread);
            refs.scatterArrRef.current = particles;
        }
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            const local = localProgress(e, particle.start);
            particle.x = particle.scatterX + (particle.originalX - particle.scatterX) * local;
            particle.y = particle.scatterY + (particle.originalY - particle.scatterY) * local;
            particle.opacity = particle.originalAlpha * local;
        }
    } else {
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            particle.x = particle.originalX;
            particle.y = particle.originalY;
            const local = localProgress(e, particle.start);
            particle.opacity = particle.originalAlpha * local;
        }
    }
    renderParticles(ctx, particles, canvas);
    if (p >= 1) {
        resetParticles(particles);
        refs.phaseRef.current = "hold";
        refs.phaseTimeRef.current = 0;
        refs.startsKeyRef.current = "";
    }
}

export function stepHoldPhase({ ctx, canvas, particles, t, refs, renderParticles }: PhaseStepArgs) {
    if (!refs.holdDrawnRef.current) {
        renderParticles(ctx, particles, canvas);
        refs.holdDrawnRef.current = true;
    }
    if (refs.phaseTimeRef.current >= t.hold) {
        resetParticles(particles);
        refs.phaseRef.current = "out";
        refs.phaseTimeRef.current = 0;
        refs.startsKeyRef.current = "";
        refs.holdDrawnRef.current = false;
    }
}

// ------------------------------------------------------------ //
// FONT HANDLING
// ------------------------------------------------------------ //
export const handleFontChange = ({
    currentFont,
    lastFontRef,
    props,
    canvasRef,
    wrapperSize,
    particlesRef,
    globalDpr,
    currentTextIndex,
}: any) => {
    if (currentFont !== lastFontRef.current) {
        lastFontRef.current = currentFont;
        const timeoutId = setTimeout(() => {
            cleanup({ canvasRef, particlesRef });
            renderCanvas({
                framerProps: props,
                canvasRef,
                wrapperSize,
                particlesRef,
                globalDpr,
                currentTextIndex,
            });
        }, 1e3);
        return () => {
            clearTimeout(timeoutId);
            cleanup({ canvasRef, particlesRef });
        };
    }
    return undefined;
};

// ------------------------------------------------------------ //
// CLEANUP
// ------------------------------------------------------------ //
export const cleanup = ({ canvasRef, particlesRef }: any) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (particlesRef.current) {
        particlesRef.current = [];
    }
};
