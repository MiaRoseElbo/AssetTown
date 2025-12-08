import React from "react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">About Asset Town</h1>

      <p className="text-lg leading-relaxed mb-6">
        Asset Town is a small passion project created to make high-quality,
        stylized SVG character assets accessible to everyone — artists, indie
        game devs, tabletop designers, VTubers, teachers, and everyday
        creatives.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        All artwork is created by <strong>Mia Rose Elbo</strong>, a queer Latina
        illustrator and game designer. The goal is to provide a unique, charming
        visual style that can be customized, recolored, and used in your
        creative work while still respecting the rights and livelihood of the
        artist.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What Asset Town Offers
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li>Beautiful SVG character illustrations</li>
        <li>Free PNG and JPG downloads</li>
        <li>High-quality paid SVG versions via Payhip</li>
        <li>Tools to preview and recolor assets</li>
        <li>A simple licensing system designed for creators</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Why SVG?</h2>
      <p className="text-lg leading-relaxed mb-6">
        SVGs are infinitely scalable, editable, and perfect for animation,
        responsive web design, and games. The paid SVGs are cleaned, organized,
        and optimized for professional use — unlike the PNG/JPG previews.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Who Is This For?</h2>
      <p className="text-lg leading-relaxed mb-6">
        Asset Town is for anyone who loves expressive, stylized art:
      </p>

      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li>Indie game developers</li>
        <li>TTRPG creators</li>
        <li>Designers & illustrators</li>
        <li>VTubers and streamers</li>
        <li>Educators making visuals for classes</li>
        <li>Hobbyists who love cute characters</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Support the Artist</h2>
      <p className="text-lg leading-relaxed mb-6">
        Buying the SVGs directly supports the artist and helps Asset Town grow.
        Every purchase contributes to new characters, new features, and more
        tools for creators.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Thank you for being here, for enjoying the art, and for supporting indie
        creators. 💛
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
  );
}
