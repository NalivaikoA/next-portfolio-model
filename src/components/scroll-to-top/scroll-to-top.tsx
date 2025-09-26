"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { HiChevronUp } from "react-icons/hi2";
import styles from "./scroll-to-top.module.scss";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={clsx(styles.scrollToTop, { [styles.visible]: visible })}
      onClick={scrollUp}
      aria-label="Наверх"
    >
      <HiChevronUp size={28} />
    </button>
  );
};
