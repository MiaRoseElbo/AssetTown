import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import assets from "../data/assets.json";

export default function AssetPage() {
  const { id } = useParams();
  const asset = assets.find((a) => a.id === id);
  const [svgHtml, setSvgHtml] = useState(null);

  const svgRef = useRef(null);

  // Load SVG once
  useEffect(() => {
    if (!asset) return;

    const svgPath = `${import.meta.env.BASE_URL}assets/svg/${asset.id}.svg`;

    fetch(svgPath)
      .then((res) => res.text())
      .then(setSvgHtml)
      .catch((err) => console.error("Failed to load SVG", err));
  }, [asset]);

  if (!asset)
    return (
      <div>
        Asset not found — <Link to="/">back</Link>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* SVG Preview */}
      <div className="max-h-[80vh] md:col-span-2 bg-white p-6 rounded shadow">
        {svgHtml && (
          <div
            ref={svgRef}
            dangerouslySetInnerHTML={{ __html: svgHtml }}
            className="asset-svg
      flex items-center justify-center
      max-w-full max-h-full
      [&>svg]:max-w-full [&>svg]:max-h-full
      [&>svg]:w-auto [&>svg]:h-auto"
          />
        )}
      </div>

      {/* Sidebar */}
      <aside className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">
          {asset.id
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{asset.character}</p>

        <div className="mt-6 space-y-2">
          <a
            href={`${import.meta.env.BASE_URL}assets/png/${asset.id}.png`}
            download={`${asset.id}.png`}
            className="block w-full text-center py-2 border rounded"
          >
            Download PNG
          </a>

          <a
            href={`${import.meta.env.BASE_URL}assets/jpg/${asset.id}.jpg`}
            download={`${asset.id}.jpg`}
            className="block w-full text-center py-2 border rounded"
          >
            Download JPG
          </a>

          <button
            onClick={() => {
              if (!asset.buySvg) return;
              window.open(asset.buySvg, "_blank", "noopener,noreferrer");
            }}
            disabled={!asset.buySvg}
            className={`block w-full text-center py-2 rounded text-white
    ${
      asset.buySvg
        ? "bg-indigo-600 hover:bg-indigo-700"
        : "bg-gray-400 cursor-not-allowed"
    }`}
          >
            {asset.buySvg ? "Buy SVG" : "Not Available"}
          </button>
        </div>
      </aside>
    </div>
  );
}
