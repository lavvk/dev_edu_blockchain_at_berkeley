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
    <div className="group relative mx-auto flex h-[28rem] w-full max-w-2xl items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 to-purple-200 text-center">
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-sm font-semibold text-purple-900 group-hover:opacity-0 transition-opacity">
        <p>hover to play</p>
      </div>

      <div className="pointer-events-auto h-full w-full opacity-0 transition-opacity group-hover:opacity-100">
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
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 text-gray-900">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold sm:text-6xl">
          lavanya's top slime videos
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          i really wanna make slime
        </p>

        <a
          href="#top-videos"
          className="mt-8 rounded-full bg-pink-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-pink-600"
        >
          view the slime
        </a>
      </section>

      <section id="top-videos" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">my top 5 slime reels</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {topVideos.map((video, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur"
            >
              <HoverInstagramEmbed url={video.url} />

              <h3 className="mt-4 text-xl font-semibold">{video.title}</h3>

              <p className="mt-2 text-sm text-gray-600">{video.description}</p>

              <div className="mt-4 inline-block rounded-xl bg-pink-100 px-4 py-2 font-semibold text-pink-700">
                my rating: {video.rating}/10
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-3xl bg-white/80 p-8 shadow-lg backdrop-blur text-center">
          <h2 className="text-3xl font-bold">ok thx</h2>

          <Link
            href="/about"
            className="mt-6 inline-block rounded-full bg-purple-500 px-6 py-3 font-semibold text-white hover:bg-purple-600"
          >
            click here
          </Link>
        </div>
      </section>
    </main>
  );
}