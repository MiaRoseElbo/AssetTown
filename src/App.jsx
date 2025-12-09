console.log("🔥 App.jsx loaded");

import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AssetPage from "./pages/Asset";
import About from "./pages/About";
import Terms from "./pages/Terms";

export default function App() {
  const [logoSvg, setLogoSvg] = useState(null);

  // Load logo.svg once when the app mounts
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/svg/logo.svg`)
      .then((res) => res.text())
      .then(setLogoSvg)
      .catch((err) => console.error("Failed to load logo.svg", err));

    const colors = [
      {
        dark02: "var(--darkBlueDark02)",
        dark01: "var(--darkBlueDark01)",
        main: "var(--darkBlueDimmed02)",
        dimmed01: "var(--darkBlueDimmed01)",
        dimmed02: "var(--darkBlueDimmed02)",
        dimmed03: "var(--darkBlueDimmed03)",
      },
      {
        dark02: "var(--blueDark02)",
        dark01: "var(--blueDark01)",
        main: "var(--blueColor)",
        dimmed01: "var(--blueDimmed01)",
        dimmed02: "var(--blueDimmed02)",
        dimmed03: "var(--blueDimmed03)",
      },
      {
        dark02: "var(--lightBlueDark02)",
        dark01: "var(--lightBlueDark01)",
        main: "var(--lightBlueColor)",
        dimmed01: "var(--lightBlueDimmed01)",
        dimmed02: "var(--lightBlueDimmed02)",
        dimmed03: "var(--lightBlueDimmed03)",
      },
      {
        dark02: "var(--greenDark02)",
        dark01: "var(--greenDark01)",
        main: "var(--greenColor)",
        dimmed01: "var(--greenDimmed01)",
        dimmed02: "var(--greenDimmed02)",
        dimmed03: "var(--greenDimmed03)",
      },
      {
        dark02: "var(--yellowDark02)",
        dark01: "var(--yellowDark01)",
        main: "var(--yellowColor)",
        dimmed01: "var(--yellowDimmed01)",
        dimmed02: "var(--yellowDimmed02)",
        dimmed03: "var(--yellowDimmed03)",
      },
      {
        dark02: "var(--orangeDark02)",
        dark01: "var(--orangeDark01)",
        main: "var(--orangeColor)",
        dimmed01: "var(--orangeDimmed01)",
        dimmed02: "var(--orangeDimmed02)",
        dimmed03: "var(--orangeDimmed03)",
      },
      {
        dark02: "var(--redDark02)",
        dark01: "var(--redDark01)",
        main: "var(--redColor)",
        dimmed01: "var(--redDimmed01)",
        dimmed02: "var(--redDimmed02)",
        dimmed03: "var(--redDimmed03)",
      },
      {
        dark02: "var(--violetDark02)",
        dark01: "var(--violetDark01)",
        main: "var(--violetColor)",
        dimmed01: "var(--violetDimmed01)",
        dimmed02: "var(--violetDimmed02)",
        dimmed03: "var(--violetDimmed03)",
      },
      {
        dark02: "var(--lilacDark02)",
        dark01: "var(--lilacDark01)",
        main: "var(--lilacColor)",
        dimmed01: "var(--lilacDimmed01)",
        dimmed02: "var(--lilacDimmed02)",
        dimmed03: "var(--lilacDimmed03)",
      },
      {
        dark02: "var(--pinkDark02)",
        dark01: "var(--pinkDark01)",
        main: "var(--pinkColor)",
        dimmed01: "var(--pinkDimmed01)",
        dimmed02: "var(--pinkDimmed02)",
        dimmed03: "var(--pinkDimmed03)",
      },
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.documentElement.style.setProperty(
      "--colorDark02",
      randomColor.dark02
    );
    document.documentElement.style.setProperty(
      "--colorDark01",
      randomColor.dark01
    );
    document.documentElement.style.setProperty("--mainColor", randomColor.main);
    document.documentElement.style.setProperty(
      "--colorDimmed01",
      randomColor.dimmed01
    );
    document.documentElement.style.setProperty(
      "--colorDimmed02",
      randomColor.dimmed02
    );
    document.documentElement.style.setProperty(
      "--colorDimmed03",
      randomColor.dimmed03
    );
  }, []);

  return (
    <div className="min-h-screen bg-[var(--colorDimmed03)] text-gray-900">
      {/* Header */}
      <header className="h-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {logoSvg && (
              <div
                className="[&>svg]:w-auto [&>svg]:h-16"
                dangerouslySetInnerHTML={{ __html: logoSvg }}
              />
            )}
          </Link>

          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/terms" className="hover:underline opacity-70">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asset/:id" element={<AssetPage />} />

          {/* New Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-6 text-center text-sm text-gray-600">
        <div className="space-x-4 mb-2">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms
          </Link>
        </div>
        © {new Date().getFullYear()} —{" "}
        <a
          href="https://miaroseelbo.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Mia Rose Elbo
        </a>
      </footer>
    </div>
  );
}
