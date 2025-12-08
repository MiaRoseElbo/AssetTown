import React from "react";
import AssetCard from "./AssetCard";

export default function AssetGrid({ assets, color }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {assets.map((a) => (
        <AssetCard key={a.id} asset={a} color={color} />
      ))}
    </div>
  );
}
