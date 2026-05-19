"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./IntroAnimation.module.css";

const LEAVE_DELAY   = 5500;
const UNMOUNT_DELAY = 6600;
const LOGO_SRC          = "/images/tecnofusi-logo-animation.png";
const FALLBACK_LOGO_SRC = "/images/tecnofusi-logo.png";

const SPARKS = [
  { tx: "-105px", ty: "-115px", color: "#ff4b55", size: 7, dur: "0.85s", delay: "0.58s" },
  { tx: "118px",  ty: "-92px",  color: "#e0141b", size: 6, dur: "0.75s", delay: "0.60s" },
  { tx: "-82px",  ty: "108px",  color: "#ffcc44", size: 6, dur: "0.92s", delay: "0.56s" },
  { tx: "132px",  ty: "78px",   color: "#ff4b55", size: 5, dur: "0.78s", delay: "0.62s" },
  { tx: "-150px", ty: "22px",   color: "#e0141b", size: 5, dur: "0.88s", delay: "0.59s" },
  { tx: "62px",   ty: "-142px", color: "#ffaa22", size: 6, dur: "0.90s", delay: "0.57s" },
  { tx: "160px",  ty: "-38px",  color: "#ff4b55", size: 5, dur: "0.72s", delay: "0.63s" },
  { tx: "-52px",  ty: "-158px", color: "#ffcc44", size: 4, dur: "0.98s", delay: "0.55s" },
  { tx: "92px",   ty: "142px",  color: "#e0141b", size: 6, dur: "0.84s", delay: "0.61s" },
  { tx: "-132px", ty: "88px",   color: "#ff4b55", size: 5, dur: "0.80s", delay: "0.58s" },
  { tx: "32px",   ty: "-168px", color: "#ffaa22", size: 4, dur: "0.95s", delay: "0.56s" },
  { tx: "-168px", ty: "-62px",  color: "#e0141b", size: 5, dur: "0.88s", delay: "0.60s" },
  { tx: "48px",   ty: "155px",  color: "#ffcc44", size: 3, dur: "1.00s", delay: "0.64s" },
  { tx: "-92px",  ty: "-58px",  color: "#ff4b55", size: 3, dur: "0.70s", delay: "0.66s" },
  { tx: "152px",  ty: "42px",   color: "#ffaa22", size: 3, dur: "0.82s", delay: "0.68s" },
  { tx: "-38px",  ty: "172px",  color: "#e0141b", size: 4, dur: "0.76s", delay: "0.54s" },
];

type Stage = "show" | "leave" | "gone";

type SparkStyle = CSSProperties & {
  "--tx": string;
  "--ty": string;
  "--dur": string;
  "--delay": string;
};

function releaseDoc() {
  document.documentElement.removeAttribute("data-intro");
  document.documentElement.style.overflow      = "";
  document.documentElement.style.pointerEvents = "";
}

export function IntroAnimation() {
  const [stage, setStage]     = useState<Stage | null>(null);
  const [logoSrc, setLogoSrc] = useState(LOGO_SRC);

  useEffect(() => {
    if (!document.documentElement.hasAttribute("data-intro")) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setStage("show");

    const leaveDelay   = prefersReduced ? 800   : LEAVE_DELAY;
    const unmountDelay = prefersReduced ? 1200  : UNMOUNT_DELAY;

    const leaveTimer   = window.setTimeout(() => setStage("leave"),  leaveDelay);
    const unmountTimer = window.setTimeout(() => {
      setStage("gone");
      releaseDoc();
    }, unmountDelay);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(unmountTimer);
      releaseDoc();
    };
  }, []);

  if (stage === null || stage === "gone") return null;

  const leaving = stage === "leave";

  return (
    <div
      id="intro-overlay"
      className={`${styles.overlay} ${leaving ? styles.overlayLeave : ""}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className={styles.igniteFlash} />
      <div className={styles.radialGlow} />
      <div className={styles.scanH} />

      <div className={styles.sparksWrap}>
        {SPARKS.map((spark, i) => (
          <div
            key={i}
            className={styles.spark}
            style={{
              "--tx":     spark.tx,
              "--ty":     spark.ty,
              "--dur":    spark.dur,
              "--delay":  spark.delay,
              width:      spark.size,
              height:     spark.size,
              background: spark.color,
            } as SparkStyle}
          />
        ))}
      </div>

      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />

      <div className={`${styles.content} ${leaving ? styles.contentLeave : ""}`}>
        <div className={styles.logoWrap}>
          <Image
            src={logoSrc}
            alt=""
            width={560}
            height={180}
            className={styles.logoImage}
            priority
            onError={() => setLogoSrc(FALLBACK_LOGO_SRC)}
          />
        </div>

        <div className={styles.taglineWrap} aria-label="Industrial Precision">
          <span className={styles.tagline}>Industrial Precision</span>
          <span className={styles.cursor} aria-hidden="true">_</span>
        </div>
      </div>

      <div className={styles.progressBar} />
    </div>
  );
}