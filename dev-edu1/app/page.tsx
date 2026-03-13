"use client";

import { useState } from "react";
import Link from "next/link";

type Video = {
  url: string;
  title: string;
  description: string;
  rating: number;
};

function HoverInstagramEmbed({ url }: { url: string }) {
  const reelMatch = url.match(/instagram\.com\/reel\/([^/?#]+)/);
  const reelId = reelMatch ? reelMatch[1] : null;
  const embedUrl = reelId
    ? `https://www.instagram.com/reel/${reelId}/embed`
    : url;

  return (
    <div className="group relative mx-auto flex h-[28rem] w-full max-w-2xl items-center justify-center overflow-hidden rounded-3xl border-2 border-white/40 bg-gradient-to-br from-pink-300 via-purple-300 to-fuchsia-300 text-center shadow-xl ring-2 ring-pink-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:ring-4 hover:ring-pink-400/50">
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-sm font-bold uppercase tracking-wider text-purple-900/90 transition-opacity duration-300 group-hover:opacity-0">
        <p className="rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm">hover to play</p>
      </div>

      <div className="pointer-events-auto h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <iframe
          src={embedUrl}
          className="h-full w-full"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  const [linkInput, setLinkInput] = useState("");
  const [userVideos, setUserVideos] = useState<string[]>([]);

  const topVideos: Video[] = [
    {
      url: "https://www.instagram.com/reel/DVK9ANtjZ1R/",
      title: "fruit wax clay",
      description: "i love the wax cracking and how they look like jellycats",
      rating: 10,
    },
    {
      url: "https://www.instagram.com/reel/C8lFmJpMOKM/",
      title: "wax rainbow slime",
      description:
        "i also like this wax cracking +1 point for adding more wax at the end",
      rating: 9.5,
    },
    {
      url: "https://www.instagram.com/reel/DT0FcKTAdFk/",
      title: "white fluffy slime",
      description:
        "ok at first it was lowkey mid but then the bubbles cracked and it got super stretchy",
      rating: 9.2,
    },
    {
      url: "https://www.instagram.com/reel/DABtlkXIE5S/",
      title: "orange fluffy slime",
      description: "really satisfying i want this slime so bad",
      rating: 9.4,
    },
    {
      url: "https://www.instagram.com/reel/DVDvTYOEjfD/",
      title: "green fluffy slime",
      description: "good bubbles and nice color",
      rating: 8.8,
    },
  ];

  function handleAddVideo() {
    if (!linkInput.trim()) return;
    setUserVideos([...userVideos, linkInput.trim()]);
    setLinkInput("");
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-gray-900">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background: "linear-gradient(-45deg, #fce4ec, #f3e5f5, #e8eaf6, #fce4ec, #f8bbd9)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 12s ease infinite",
        }}
      />
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-pink-400/30 blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-purple-400/25 blur-3xl"
          style={{ animation: "float 10s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl"
          style={{ animation: "float 7s ease-in-out infinite 2s" }}
        />
      </div>

      <div className="relative z-10">
        <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
          <h1
            className="font-display text-5xl font-bold sm:text-7xl md:text-8xl"
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #d946ef 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-text 4s ease infinite",
            }}
          >
            lavanya&apos;s top slime videos
          </h1>

          <p
            className="mt-6 max-w-2xl text-xl text-gray-700"
            style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}
          >
            i really wanna make slime
          </p>

          <a
            href="#top-videos"
            className="mt-10 inline-block rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/40"
            style={{ animation: "fade-up 0.8s ease-out 0.4s both" }}
          >
            view the slime
          </a>
        </section>

        <section
          id="top-videos"
          className="mx-auto max-w-6xl px-6 py-16"
          style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}
        >
          <h2 className="font-display text-4xl font-bold text-gray-800 sm:text-5xl">
            my top 5 slime reels
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {topVideos.map((video, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-200/50"
                style={{
                  animation: `fade-up 0.6s ease-out ${0.5 + index * 0.1}s both`,
                }}
              >
                <HoverInstagramEmbed url={video.url} />

                <h3 className="mt-5 font-display text-xl font-semibold text-gray-900">
                  {video.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {video.description}
                </p>

                <div className="mt-4 inline-block rounded-xl bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 font-bold text-pink-700 shadow-inner">
                  my rating: {video.rating}/10
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-4xl px-6 py-16"
          style={{ animation: "fade-up 0.8s ease-out 0.6s both" }}
        >
          <div className="rounded-3xl border border-white/60 bg-white/90 p-10 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/40">
            <h2 className="font-display text-4xl font-bold text-gray-900">ok thx</h2>

            <Link
              href="/about"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40"
            >
              click here
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
