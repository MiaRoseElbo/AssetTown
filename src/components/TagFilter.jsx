import React from "react";

export default function TagFilter({ assets, selected, onChange }) {
  const tags = Array.from(new Set(assets.flatMap((a) => a.tags))).sort();
  function toggle(t) {
    if (selected.includes(t)) onChange(selected.filter((s) => s !== t));
    else onChange([...selected, t]);
  }
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((t) => (
        <button
          key={t}
          onClick={() => toggle(t)}
          className={`px-3 py-1 rounded shadow-sm ${
            selected.includes(t)
              ? "bg-[var(--mainColor)] text-white"
              : "bg-white hover:bg-[var(--colorDimmed01)]"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
