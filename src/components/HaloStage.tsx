"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  videoSrc: string;
  poster: string;
  alt: string;
  children: React.ReactNode;
};

export function HaloStage({ videoSrc, poster, alt, children }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduce(mq.matches);
      if (mq.matches) {
        videoRef.current?.pause();
        setPlaying(false);
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="halo-stage" aria-label="Product hero">
      <div className="halo-media">
        {reduce ? (
          <img src={poster} alt={alt} />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="halo-ring" aria-hidden="true" />
      <div className="wrap hero-copy">{children}</div>
      {!reduce && (
        <button className="media-ctrl" type="button" onClick={toggle}>
          {playing ? "Pause package view" : "Play package view"}
        </button>
      )}
    </section>
  );
}
