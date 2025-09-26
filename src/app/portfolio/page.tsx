"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./page.module.scss";

const basePath =
  process.env.NODE_ENV === "production" ? "/next-portfolio-model" : "";

export default function PortfolioPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Вычисляем позицию относительно контейнера
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={
        {
          "--x": `${mousePos.x}px`,
          "--y": `${mousePos.y}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${basePath}/images/gallery/photo6.jpg)`,
        }}
      />
      <div className={styles.overlayMask} />

      <h1 className={styles.title}>
        <div>C</div>
        <div>O</div>
        <div>M</div>
        <div>I</div>
        <div>N</div>
        <div>G</div>
        <div>&nbsp;</div>
        <div>S</div>
        <div>O</div>
        <div>O</div>
        <div>N</div>
      </h1>
    </div>
  );
}
