"use client";

import { useSyncExternalStore } from "react";
import GlassIcon from "@/components/originkit/ui/glass-icon";

const PURPLE_GRADIENT = ["#0f0326", "#2e0d63", "#5b21b6", "#8b5cf6"];

// Ring and text sizes are fractions of the viewport, so they need its size.
function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}
const getViewport = () => `${window.innerWidth}x${window.innerHeight}`;
const getServerViewport = () => "1280x800";

export default function GlassHero() {
  const [w, h] = useSyncExternalStore(subscribe, getViewport, getServerViewport)
    .split("x")
    .map(Number);

  // `size` is the ring's half-extent as a % of half the screen height. On tall
  // screens, cap it so the ring stays within ~84% of the width.
  const size = Math.min(55, (84 * w) / h);
  const ringOffsetY = 15;
  // Center the text on the ring's lower edge so the glass refracts its top half.
  const textOffsetY = ringOffsetY - size;
  const fontSize = Math.round(Math.min(120, w / 7.5));
  const fontFamily =
    typeof document === "undefined"
      ? "system-ui, sans-serif"
      : getComputedStyle(document.documentElement).getPropertyValue("--font-geist-sans") ||
        "system-ui, sans-serif";

  return (
    <GlassIcon
      shape="Torus"
      size={size}
      backgroundGradient={PURPLE_GRADIENT}
      orient={{ offsetY: ringOffsetY }}
      backdrop={{
        type: "Text",
        text: "GLASS ICON",
        textColor: "#FFFFFF",
        textOffsetY,
        font: { fontFamily, fontSize, fontWeight: 600, letterSpacing: fontSize * 0.04 },
      }}
    />
  );
}
