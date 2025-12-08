import React, { useEffect } from "react";

export default function ColorPicker({ color, setColor, targetId }) {
  useEffect(() => {
    const container = document.getElementById(targetId);
    if (!container) return;

    const apply = (selector, fill) => {
      container.querySelectorAll(selector).forEach((el) => {
        el.style.fill = fill;
      });
    };

    apply(".mainColor", color);
    apply(".colorDimmed01", lighten(color, 18));
    apply(".colorDimmed02", lighten(color, 35));
    apply(".colorDark01", lighten(color, -20));
    apply(".colorDark02", lighten(color, -35));
  }, [color, targetId]);

  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      className="w-full h-12 p-0 border rounded"
    />
  );
}

// Simple lighten/darken using % of 255
function lighten(hex, percent) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const adjust = (c) =>
    Math.min(255, Math.max(0, Math.round(c + (percent / 100) * 255)));

  const nr = adjust(r),
    ng = adjust(g),
    nb = adjust(b);

  return `#${nr.toString(16).padStart(2, "0")}${ng
    .toString(16)
    .padStart(2, "0")}${nb.toString(16).padStart(2, "0")}`;
}
