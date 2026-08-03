// Text Vaporize
// Sistema de particulas puro: sample de pixels do canvas, fisica de
// dispersao/reagrupamento e stamp de volta no canvas. Sem dependencia de
// React -- usado por text-vaporize-engine.ts (fase) e text-vaporize.tsx
// (render inicial/config).

// How far a particle travels over a phase, per unit of Spread.
export const DRIFT_REACH = 45;

// Fraction of a phase's duration spent sweeping across the text.
export const SWEEP_SPAN = 0.6;

// ------------------------------------------------------------ //
// RENDER CANVAS
// ------------------------------------------------------------ //
export const renderCanvas = ({
    framerProps,
    canvasRef,
    wrapperSize,
    particlesRef,
    globalDpr,
    currentTextIndex,
}: any) => {
    const canvas = canvasRef.current as any;
    if (!canvas || !wrapperSize.width || !wrapperSize.height) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = wrapperSize;
    const fontSize = parseInt(
        String(framerProps.font.fontSize ?? "50").replace("px", "")
    );
    const font = `${framerProps.font.fontWeight ?? 400} ${fontSize * globalDpr}px ${framerProps.font.fontFamily}`;
    const color = parseFramerColor(framerProps.color);
    const currentText = framerProps.texts[currentTextIndex] || "Framer";

    ctx.font = font;
    const widest = (framerProps.texts ?? [currentText]).reduce(
        (w: number, t: string) => Math.max(w, ctx.measureText(t || "").width),
        0
    );
    const overflowX = Math.max(0, (widest / globalDpr - width) / 2);
    const driftRoom =
        calculateVaporizeSpread(fontSize) *
        (framerProps.spread ?? 5) *
        DRIFT_REACH *
        0.6;
    const bleed = Math.ceil(Math.min(400, overflowX + fontSize + driftRoom));

    const cssW = width + bleed * 2;
    const cssH = height + bleed * 2;
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    canvas.style.left = `${-bleed}px`;
    canvas.style.top = `${-bleed}px`;
    canvas.width = Math.floor(cssW * globalDpr);
    canvas.height = Math.floor(cssH * globalDpr);

    const inset = bleed * globalDpr;
    const boxW = width * globalDpr;
    const textY = canvas.height / 2;
    let textX;
    if (framerProps.alignment === "center") {
        textX = inset + boxW / 2;
    } else if (framerProps.alignment === "left") {
        textX = inset;
    } else {
        textX = inset + boxW;
    }
    const { particles, textBoundaries } = createParticles({
        ctx,
        canvas,
        text: currentText,
        textX,
        textY,
        font,
        color,
        alignment: framerProps.alignment,
    });
    particlesRef.current = particles;
    canvas.textBoundaries = textBoundaries;
};

// ------------------------------------------------------------ //
// PARTICLE SYSTEM
// ------------------------------------------------------------ //
interface CreateParticlesOptions {
    ctx: any;
    canvas: any;
    text: any;
    textX: any;
    textY: any;
    font: any;
    color: any;
    alignment: any;
}

interface SamplePixelsOptions {
    data: Uint8ClampedArray;
    boxW: number;
    boxH: number;
    x0: number;
    y0: number;
    sampleRate: number;
}

// Walks the sampled pixel box and turns every opaque pixel into a particle.
function samplePixelsToParticles({ data, boxW, boxH, x0, y0, sampleRate }: SamplePixelsOptions) {
    const particles: any[] = [];
    for (let y = 0; y < boxH; y += sampleRate) {
        for (let x = 0; x < boxW; x += sampleRate) {
            const index = (y * boxW + x) * 4;
            const alpha = data[index + 3];
            if (alpha > 0) {
                const originalAlpha = alpha / 255;
                particles.push({
                    x: x0 + x,
                    y: y0 + y,
                    originalX: x0 + x,
                    originalY: y0 + y,
                    r: data[index],
                    g: data[index + 1],
                    b: data[index + 2],
                    opacity: originalAlpha,
                    originalAlpha,
                    angle: 0,
                    speed: 0,
                    start: 0,
                    driftX: 0,
                    driftY: 0,
                    wobble: 0,
                    scatterX: 0,
                    scatterY: 0,
                    shouldFadeQuickly: false,
                });
            }
        }
    }
    return particles;
}

const createParticles = ({
    ctx,
    canvas,
    text,
    textX,
    textY,
    font,
    color,
    alignment,
}: CreateParticlesOptions) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textAlign = alignment;
    ctx.textBaseline = "middle";
    ctx.imageSmoothingQuality = "high";
    ctx.imageSmoothingEnabled = true;
    if (ctx.fontKerning) ctx.fontKerning = "normal";
    if (ctx.textRendering) ctx.textRendering = "geometricPrecision";
    const metrics = ctx.measureText(text);
    let textLeft;
    const textWidth = metrics.width;
    if (alignment === "center") {
        textLeft = textX - textWidth / 2;
    } else if (alignment === "left") {
        textLeft = textX;
    } else {
        textLeft = textX - textWidth;
    }
    const textBoundaries = {
        left: textLeft,
        right: textLeft + textWidth,
        width: textWidth,
    };
    ctx.fillText(text, textX, textY);
    const ascent = metrics.actualBoundingBoxAscent || 60;
    const descent = metrics.actualBoundingBoxDescent || 20;
    const pad = 4;
    const x0 = Math.max(0, Math.floor(textLeft - pad));
    const y0 = Math.max(0, Math.floor(textY - ascent - pad));
    const x1 = Math.min(canvas.width, Math.ceil(textLeft + textWidth + pad));
    const y1 = Math.min(canvas.height, Math.ceil(textY + descent + pad));
    const boxW = Math.max(1, x1 - x0);
    const boxH = Math.max(1, y1 - y0);
    const data = ctx.getImageData(x0, y0, boxW, boxH).data;
    const currentDPR = canvas.width / parseInt(canvas.style.width);
    const sampleRate = Math.max(1, Math.round(currentDPR));
    canvas.particleSize = sampleRate;
    const particles = samplePixelsToParticles({ data, boxW, boxH, x0, y0, sampleRate });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return { particles, textBoundaries };
};

// Advances one particle's vaporize animation in place. Returns true while
// it's still visible/pending (i.e. the cycle isn't done with it yet).
function vaporizeOneParticle(particle: any, progress: any, spread: any, density: any): boolean {
    const shouldVaporize = progress >= (particle.start ?? 0);
    if (!shouldVaporize) return true;

    if (particle.speed === 0) {
        particle.angle = Math.random() * Math.PI * 2;
        particle.speed = 0.5 + Math.random();
        const reach = particle.speed * spread * DRIFT_REACH;
        particle.driftX = Math.cos(particle.angle) * reach;
        particle.driftY = Math.sin(particle.angle) * reach * 0.6;
        particle.wobble = (Math.random() - 0.5) * 2;
        particle.shouldFadeQuickly = Math.random() > density;
    }
    const local = localProgress(progress, particle.start ?? 0);
    const fade = particle.shouldFadeQuickly ? Math.min(1, local * 2) : local;
    particle.opacity = particle.originalAlpha * (1 - fade);
    const travel = local * (2 - local);
    const wobble = Math.sin(local * Math.PI * 3 + particle.angle) * particle.wobble * spread * 4 * local;
    particle.x = particle.originalX + particle.driftX * travel + wobble;
    particle.y = particle.originalY + particle.driftY * travel;
    return particle.opacity > 0.01;
}

export const updateParticles = (
    particles: any,
    progress: any,
    MULTIPLIED_VAPORIZE_SPREAD: any,
    density: any
) => {
    let allParticlesVaporized = true;
    for (let i = 0; i < particles.length; i++) {
        const stillVisible = vaporizeOneParticle(particles[i], progress, MULTIPLIED_VAPORIZE_SPREAD, density);
        if (stillVisible) allParticlesVaporized = false;
    }
    return allParticlesVaporized;
};

// Stamps one particle as a size×size square into the pixel buffer.
function stampParticle(data: Uint8ClampedArray, w: number, h: number, particle: any, size: number) {
    const alpha = particle.opacity > 1 ? 255 : (particle.opacity * 255) | 0;
    const px = particle.x | 0;
    const py = particle.y | 0;
    for (let dy = 0; dy < size; dy++) {
        const y = py + dy;
        if (y < 0 || y >= h) continue;
        let idx = (y * w + px) * 4;
        for (let dx = 0; dx < size; dx++) {
            const x = px + dx;
            if (x >= 0 && x < w) {
                data[idx] = particle.r;
                data[idx + 1] = particle.g;
                data[idx + 2] = particle.b;
                data[idx + 3] = alpha;
            }
            idx += 4;
        }
    }
}

export const renderParticles = (
    ctx: any,
    particles: any,
    globalDpr: any,
    bufferRef: any,
    canvas: any
) => {
    const w = canvas.width;
    const h = canvas.height;
    if (w <= 0 || h <= 0) return;
    let buf = bufferRef.current;
    if (!buf || buf.width !== w || buf.height !== h) {
        buf = ctx.createImageData(w, h);
        bufferRef.current = buf;
    }
    const data = buf.data;
    data.fill(0);
    const size = Math.max(1, canvas.particleSize || Math.round(globalDpr));
    for (let i = 0; i < particles.length; i++) {
        if (particles[i].opacity > 0.01) stampParticle(data, w, h, particles[i], size);
    }
    ctx.putImageData(buf, 0, 0);
};

export const assignStarts = (particles: any, boundaries: any, order: string) => {
    const width = boundaries?.width || 1;
    const left = boundaries?.left ?? 0;
    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        if (order === "together") {
            particle.start = 0;
            continue;
        }
        const frac = Math.max(
            0,
            Math.min(1, (particle.originalX - left) / width)
        );
        particle.start =
            (order === "right-to-left" ? 1 - frac : frac) * SWEEP_SPAN;
    }
};

export const localProgress = (e: number, start = 0) => {
    const span = 1 - start;
    if (span <= 0) return e >= start ? 1 : 0;
    return Math.max(0, Math.min(1, (e - start) / span));
};

export const assignScatter = (particles: any, spread: number) => {
    const reach = Math.max(20, spread * 60);
    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const angle = Math.random() * Math.PI * 2;
        const dist = (0.4 + Math.random() * 0.6) * reach;
        particle.scatterX = particle.originalX + Math.cos(angle) * dist;
        particle.scatterY = particle.originalY + Math.sin(angle) * dist * 0.5;
    }
};

export const resetParticles = (particles: any) => {
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x = p.originalX;
        p.y = p.originalY;
        p.opacity = p.originalAlpha;
        p.speed = 0;
        p.driftX = 0;
        p.driftY = 0;
    }
};

// ------------------------------------------------------------ //
// CALCULATE VAPORIZE SPREAD
// ------------------------------------------------------------ //
export const calculateVaporizeSpread = (fontSize: any) => {
    const size = typeof fontSize === "string" ? parseInt(fontSize) : fontSize;
    const points = [
        { size: 20, spread: 0.2 },
        { size: 50, spread: 0.5 },
        { size: 100, spread: 1.5 },
    ];
    if (size <= points[0].size) return points[0].spread;
    if (size >= points[points.length - 1].size)
        return points[points.length - 1].spread;
    let i = 0;
    while (i < points.length - 1 && points[i + 1].size < size) i++;
    const p1 = points[i];
    const p2 = points[i + 1];
    return (
        p1.spread +
        ((size - p1.size) * (p2.spread - p1.spread)) / (p2.size - p1.size)
    );
};

// ------------------------------------------------------------ //
// PARSE FRAMER COLOR
// ------------------------------------------------------------ //
export const parseFramerColor = (color: any): string => {
    if (typeof color === "string" && color.trim()) return color.trim();
    return "rgb(153, 153, 153)";
};

/**
 * Maps a value from one range to another, optionally clamping the result.
 */
export function transformValue(
    input: number,
    inputRange: number[],
    outputRange: number[],
    clamp = false
): number {
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    const progress = (input - inputMin) / (inputMax - inputMin);
    let result = outputMin + progress * (outputMax - outputMin);
    if (clamp) {
        if (outputMax > outputMin) {
            result = Math.min(Math.max(result, outputMin), outputMax);
        } else {
            result = Math.min(Math.max(result, outputMax), outputMin);
        }
    }
    return result;
}
