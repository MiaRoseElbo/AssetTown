import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function AssetCard({ asset }) {
  const [svgHtml, setSvgHtml] = useState(null);
  const svgRef = useRef(null);

  // Build SVG path based on asset.id
  const svgPath = `/assets/svg/${asset.id}.svg`;

  useEffect(() => {
    fetch(svgPath)
      .then((res) => res.text())
      .then(setSvgHtml)
      .catch((err) => console.error("Failed to load SVG:", svgPath, err));
  }, [svgPath]);

  return (
    <Link
      to={`/asset/${asset.id}`}
      className="
        block bg-white rounded-2xl p-4 shadow-sm 
        border border-white border-4
        transition-all duration-200
        hover:shadow-lg
        hover:border-[var(--mainColor)]
        hover:border-4
      "
    >
      <div
        className="
          h-48 flex items-center justify-center overflow-hidden
          transform transition-transform duration-300 ease-out
          hover:scale-110
        "
      >
        <div
          dangerouslySetInnerHTML={{ __html: svgHtml }}
          className="
            asset-svg flex items-center justify-center
            max-w-full max-h-full
            [&>svg]:max-w-full [&>svg]:max-h-full
            [&>svg]:w-auto [&>svg]:h-auto
          "
        />
      </div>

      <div className="mt-2 text-sm">
        <div className="font-medium">{asset.character}</div>
        <div className="text-xs text-gray-500">{asset.tags.join(", ")}</div>
      </div>
    </Link>
  );
}
