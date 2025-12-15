import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Asset Town</title>
        <meta
          name="description"
          content="About Asset Town — a free library of hand-crafted SVG digital assets."
        />
      </Helmet>
      <div className="max-w-3xl mx-auto py-12 px-4 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Welcome to Asset Town</h1>

        <p className="text-lg leading-relaxed mb-6">
          Asset Town is a small city, where you can find charming SVG characters
          created by{" "}
          <strong>
            <a href="https://miaroseelbo.github.io/" target="_blank">
              Mia Rose Elbo
            </a>
          </strong>
          , a queer illustrator and designer based in <strong>📍Berlin</strong>.
          The goal is to provide a charming visual style that can be customized,
          recolored, and used in your personal or commercial work.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          New townsfolk will be joining in regularly, so check back often for
          the latest additions! If there's a particular character you'd like to
          see more of, don't hesitate to contact me with your suggestions in the
          footer.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          What Asset Town Offers
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>Free PNG and JPG downloads</li>
          <li>High-quality paid SVG versions via Payhip</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why SVG?</h2>
        <p className="text-lg leading-relaxed mb-6">
          SVGs are infinitely scalable, editable, and perfect for digital use.
          The paid SVGs are cleaned, organized, and optimized for professional
          use — unlike the PNG/JPG previews; which are direct exports from the
          vectors, at an approximate height of 700px.<br></br>
          <small>To be honest, I haven't standarized this process.</small>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Who Is This For?</h2>
        <p className="text-lg leading-relaxed mb-6">Anyone really!</p>
        <p className="text-lg leading-relaxed mb-6">
          You can use these characters for almost anything, specially if you
          paid for the SVGs. But <b>remember!</b> You must follow the{" "}
          <a href="/terms" className="text-indigo-600 hover:text-indigo-800">
            {" "}
            license terms
          </a>
          .
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Before buying an SVG, if you are part of a non-profit organization for
          a good cause, or trans, or non-binary, or on a tight budget, please
          contact me and I may be able to offer a discount or free SVGs. I don't
          want money to be an issue blocking good things.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Thank you!</h2>
        <p className="text-lg leading-relaxed mb-6">
          Buying the SVGs directly supports the artist and helps Asset Town
          grow. Every purchase contributes to my personal (
          <small>and my cats</small>) financial freedom.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Thank you for being here, for enjoying the art, and for supporting
          indie creators. 💛
        </p>

        <div className="mt-8">
          <a
            href="https://miaroseelbo.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 underline"
          >
            Visit the artist's website →
          </a>
        </div>
      </div>
    </>
  );
}
