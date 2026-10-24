"use client";

import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
};

export default function YouTubeShort({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure
      style={{ maxWidth: "300px", margin: "0 auto 40px", textAlign: "center" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "9 / 16",
          borderRadius: "12px",
          overflow: "hidden",
          background: "#1B4332",
        }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
            title={`${title} (video)`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
              padding: 0,
              cursor: "pointer",
              background: `#1B4332 url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg) center / cover no-repeat`,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                background: "rgba(27,67,50,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption style={{ marginTop: "12px", fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
        <a
          href="https://www.youtube.com/@Fitness-ritual"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2D6A4F", fontWeight: 600, textDecoration: "none" }}
        >
          More recipe videos on YouTube →
        </a>
      </figcaption>
    </figure>
  );
}
