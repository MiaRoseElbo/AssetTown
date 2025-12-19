import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const [svgHtml, setSvgHtml] = useState(null);
  const svgContainerRef = useRef(null);
  const navigate = useNavigate();

  const svgPath = `${import.meta.env.BASE_URL}assets/banners/banner_01.svg`;

  // Load SVG
  useEffect(() => {
    fetch(svgPath)
      .then((res) => res.text())
      .then(setSvgHtml)
      .catch(console.error);
  }, [svgPath]);

  // Attach interactions dynamically
  useEffect(() => {
    if (!svgContainerRef.current) return;

    const buttons = svgContainerRef.current.querySelectorAll("g.button");

    buttons.forEach((el) => {
      const assetId = el.id;
      if (!assetId) return;

      el.style.cursor = "pointer";
      el.style.pointerEvents = "all";

      const handler = () => navigate(`/asset/${assetId}`);
      el.addEventListener("click", handler);

      // cleanup
      return () => el.removeEventListener("click", handler);
    });
  }, [svgHtml, navigate]);

  return (
    <section className="mb-20">
      {svgHtml && (
        <div
          ref={svgContainerRef}
          className="w-full overflow-hidden"
          dangerouslySetInnerHTML={{ __html: svgHtml }}
        />
      )}
    </section>
  );
}
