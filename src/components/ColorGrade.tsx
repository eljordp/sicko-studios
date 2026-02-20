"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stages = [
  {
    label: "RAW",
    tool: "Sony FX3 · S-Log3",
    description: "Flat, ungraded footage straight from the sensor. Maximum dynamic range captured.",
  },
  {
    label: "EDIT",
    tool: "Adobe Premiere Pro",
    description: "Composition, pacing, and storytelling. Every cut is intentional.",
  },
  {
    label: "GRADE",
    tool: "DaVinci Resolve",
    description: "Professional color grading. Skin tones, atmosphere, and cinematic mood — dialed in.",
  },
  {
    label: "DELIVER",
    tool: "4K · HDR Ready",
    description: "Final master delivered in cinema-quality resolution. Ready for any platform.",
  },
];

export default function ColorGrade() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Frame CSS filter transitions across scroll
  // 0.0 = flat/raw → 0.33 = editing → 0.66 = graded → 1.0 = final
  const brightness = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.8], [1.3, 1.1, 1.0, 1.05]);
  const contrast = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.8], [0.6, 0.8, 1.15, 1.2]);
  const saturate = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.8], [0.2, 0.5, 1.2, 1.1]);
  const sepia = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.8], [0.1, 0.05, 0.15, 0.08]);

  // Warm overlay opacity (cinematic warmth builds during grading)
  const warmOverlay = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0, 0.12, 0.06]);

  // Stage text opacities
  const stage0 = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const stage1 = useTransform(scrollYProgress, [0.2, 0.28, 0.45, 0.52], [0, 1, 1, 0]);
  const stage2 = useTransform(scrollYProgress, [0.5, 0.58, 0.75, 0.82], [0, 1, 1, 0]);
  const stage3 = useTransform(scrollYProgress, [0.8, 0.88, 1], [0, 1, 1]);
  const stageOpacities = [stage0, stage1, stage2, stage3];

  // Progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Vignette intensity (builds during grading)
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.3, 0.5, 0.7]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* The "frame" — a gradient landscape that gets color graded */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{
              filter: useTransform(
                [brightness, contrast, saturate, sepia],
                ([b, c, s, sp]) =>
                  `brightness(${b}) contrast(${c}) saturate(${s}) sepia(${sp})`
              ),
            }}
          >
            {/* Simulated cinematic frame — layered gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1520] via-[#1c1a24] to-[#0d1117]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#14121a] via-[#1e1a25] to-[#171320]" />
            {/* Sky/atmosphere layer */}
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-[#2a2035]/80 via-[#1e1828]/60 to-transparent" />
            {/* Ground/shadow layer */}
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0a0908] via-[#151210]/80 to-transparent" />
            {/* Horizon glow */}
            <div className="absolute inset-x-0 top-[38%] h-[20%] bg-gradient-to-b from-transparent via-[#2d2520]/30 to-transparent" />
            {/* Warm light source (camera right) */}
            <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-[#3d2f20]/20 blur-[100px]" />
          </motion.div>

          {/* Warm overlay — builds during grading phase */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#2a1a08]/0 via-[#1a1008]/0 to-transparent"
            style={{
              opacity: warmOverlay,
              background: "linear-gradient(135deg, rgba(42,26,8,0.5), rgba(26,16,8,0.3), transparent)",
            }}
          />

          {/* Vignette */}
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: vignetteOpacity,
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
            }}
          />
        </div>

        {/* Scanlines / film texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8">
          {/* Section header */}
          <div className="absolute top-8 left-8 flex items-center gap-4">
            <span className="font-mono text-xs text-white/20">02.5</span>
            <div className="w-12 h-px bg-white/10" />
            <p className="text-white/30 text-xs uppercase tracking-[0.25em]">
              The Pipeline
            </p>
          </div>

          {/* Stage labels — positioned bottom left */}
          <div className="absolute bottom-32 left-8 md:bottom-24">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-0"
                style={{ opacity: stageOpacities[i] }}
              >
                <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                  {stage.tool}
                </div>
                <div className="font-heading font-light text-5xl md:text-7xl tracking-tight mb-3">
                  {stage.label}
                </div>
                <p className="text-white/40 text-sm max-w-sm leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Progress bar — bottom of frame */}
          <div className="absolute bottom-12 left-8 right-8 md:bottom-10">
            <div className="h-px bg-white/10 w-full relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white/40"
                style={{ width: progressWidth }}
              />
            </div>
            {/* Stage markers */}
            <div className="flex justify-between mt-3">
              {stages.map((stage, i) => (
                <motion.span
                  key={i}
                  className="font-mono text-[9px] uppercase tracking-wider"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [i * 0.25, i * 0.25 + 0.1],
                      [0.15, 0.5]
                    ),
                  }}
                >
                  {stage.label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Aspect ratio badge — top right */}
          <div className="absolute top-8 right-8 flex items-center gap-3">
            <span className="font-mono text-[10px] text-white/15 uppercase tracking-wider">
              S-Log3 → Rec.709
            </span>
          </div>
        </div>

        {/* Letterbox bars for cinematic framing */}
        <div className="absolute inset-x-0 top-0 h-[8%] bg-black z-20" />
        <div className="absolute inset-x-0 bottom-0 h-[8%] bg-black z-20" />
      </div>
    </section>
  );
}
