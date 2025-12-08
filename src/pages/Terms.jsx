import React from "react";

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Terms of Use & Licensing</h1>
      <p className="text-sm text-gray-600 mb-12">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-12 leading-relaxed">
        {/* 1. Overview */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
          <p>
            This website provides downloadable digital assets, including free
            PNG/JPG files and paid SVG files purchased through Payhip. All
            artworks are original creations. By downloading or purchasing these
            assets, you receive a license to use them, not ownership of the
            artwork itself.
          </p>
        </div>

        {/* 2. Free Download License */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            2. Free Download License (PNG & JPG)
          </h2>
          <p className="mb-2">
            You may freely download and use PNG/JPG files under the following
            conditions:
          </p>

          <h3 className="text-lg font-medium mt-4">Allowed</h3>
          <ul className="list-disc ml-6">
            <li>Personal use</li>
            <li>Educational and school projects</li>
            <li>Private creative projects</li>
            <li>
              Use in personal character sheets or private game-related materials
            </li>
            <li>Posting on social media with proper attribution</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">Not Allowed</h3>
          <ul className="list-disc ml-6">
            <li>Redistributing PNG/JPG files as-is</li>
            <li>
              Uploading the files to asset libraries or free download sites
            </li>
            <li>Selling merchandise using PNG/JPG files</li>
            <li>Claiming the artwork as your own</li>
            <li>Using the artwork in AI training datasets</li>
          </ul>

          <p className="mt-3">For commercial usage, see Section 4.</p>
        </div>

        {/* 3. Paid SVG License */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">3. Paid SVG License</h2>
          <p className="mb-2">
            Purchasing an SVG grants a non-exclusive, non-transferable license
            under the following conditions:
          </p>

          <h3 className="text-lg font-medium mt-4">Allowed</h3>
          <ul className="list-disc ml-6">
            <li>All personal uses listed in Section 2</li>
            <li>Editing or recoloring the SVG for personal use</li>
            <li>Use in private or commercial tabletop games you create</li>
            <li>
              Use in commercial digital products (PDFs, websites, games) as long
              as the SVG is embedded and not extractable
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-4">Not Allowed</h3>
          <ul className="list-disc ml-6">
            <li>Redistributing or reselling the SVG file</li>
            <li>Selling asset packs that include the SVG</li>
            <li>
              Re-uploading the SVG to public servers or free download sites
            </li>
            <li>Minting NFTs or other blockchain usage</li>
            <li>Using the artwork in AI training or dataset creation</li>
            <li>
              Using the artwork in mass-produced merchandise (over 50 units)
              without extended licensing
            </li>
          </ul>

          <p className="mt-3">
            For large-scale merchandise, contact me to arrange an extended
            license.
          </p>
        </div>

        {/* 4. Commercial Use */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            4. Commercial Use (Small-Scale)
          </h2>
          <p className="mb-3">If you purchase the SVG version:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Digital products:</strong> Unlimited use as long as the
              SVG remains embedded and non-extractable.
            </li>
            <li>
              <strong>Physical goods:</strong> Up to 50 units per design.
            </li>
          </ul>
          <p className="mt-3">
            For higher quantities, please request an extended license.
          </p>
        </div>

        {/* 5. Prohibited Uses */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            5. Prohibited Uses (All File Types)
          </h2>
          <ul className="list-disc ml-6">
            <li>Claiming the artwork as your own</li>
            <li>Combining assets into a competing product</li>
            <li>Training AI models or datasets</li>
            <li>Mass-producing merchandise without permission</li>
            <li>
              Use of the artwork in hate speech, harassment, discrimination, or
              extremist content
            </li>
            <li>Use in misinformation or harmful political content</li>
          </ul>
        </div>

        {/* 6. Attribution */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">6. Attribution</h2>
          <p>
            Attribution is appreciated for all uses and optional for purchased
            SVGs. Suggested credit:
          </p>
          <p className="mt-2 p-3 bg-gray-100 rounded border">
            “Artwork by Mia”
          </p>
        </div>

        {/* 7. Refunds */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">7. Refunds</h2>
          <p>
            Because SVG files are delivered instantly as digital goods, all
            purchases are non-refundable except in cases of duplicate purchases
            or technical issues that prevent file use. If you encounter a
            problem, please contact me.
          </p>
        </div>

        {/* 8. Updates */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">8. Updates</h2>
          <p>
            These Terms of Use may be updated at any time. Changes will apply to
            future downloads and purchases.
          </p>
        </div>

        {/* 9. Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">9. Contact</h2>
          <p>
            For licensing inquiries, corrections, or commercial requests, please
            reach out at:
          </p>
          <p className="mt-2 p-3 bg-gray-100 rounded border">
            your-email@example.com
          </p>
        </div>
      </section>
    </div>
  );
}
