import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import assetsData from "../data/assets.json";
import AssetGrid from "../components/AssetGrid";
import TagFilter from "../components/TagFilter";
import CharacterFilter from "../components/CharacterFilter";

function shuffle(a) {
  return a.slice().sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [assets, setAssets] = useState([]);
  const [spotlight, setSpotlight] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [bannerSvg, setBannerSvg] = useState(null);

  const [color, setColor] = useState("#ffd300");

  useEffect(() => {
    setAssets(assetsData);

    // Set initial color
    if (assetsData[0]?.baseColor) {
      setColor(assetsData[0].baseColor);
    }

    // Pick Spotlight once
    setSpotlight(shuffle(assetsData).slice(0, 6));

    // Load Banner SVG
    const svgPath = `${import.meta.env.BASE_URL}assets/banners/banner_01.svg`;
    fetch(svgPath)
      .then((res) => res.text())
      .then(setBannerSvg)
      .catch(console.error);
  }, []);

  const filtered = assets.filter((a) => {
    if (selectedCharacter && a.character !== selectedCharacter) return false;
    if (selectedTags.length === 0) return true;
    return selectedTags.every((t) => a.tags.includes(t));
  });

  return (
    <>
      <Helmet>
        <title>Asset Town — Free Character Assets</title>
        <meta
          name="description"
          content="Free character assets, sprites, and illustrations for indie games, RPGs, and prototypes."
        />
      </Helmet>
      <div>
        {/* Banner */}
        <section className="mb-20">
          <Banner />
        </section>

        {/* Spotlight */}
        <section className="mb-20">
          <h2 className="text-2xl mb-6">Spotlight</h2>
          <AssetGrid assets={spotlight} color={color} />
        </section>

        {/* Finder */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6">Asset Finder</h2>

          <div className="flex gap-4 flex-wrap mb-4">
            <TagFilter
              assets={assets}
              selected={selectedTags}
              onChange={setSelectedTags}
            />

            <CharacterFilter
              assets={assets}
              selected={selectedCharacter}
              onChange={setSelectedCharacter}
            />

            <button
              className="ml-auto bg-[var(--colorDimmed01)] hover:bg-[var(--mainColor)] active:bg-[var(--colorDark01)] px-3 py-2 rounded"
              onClick={() => {
                setSelectedTags([]);
                setSelectedCharacter(null);
              }}
            >
              Reset
            </button>
          </div>

          <AssetGrid assets={filtered} color={color} />
        </section>
      </div>
    </>
  );
}
