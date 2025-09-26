"use client";

import styles from "./page.module.scss";
import HeroGallery from "@/components/hero-gallery/hero-gallery";
import { motion } from "framer-motion";
import IntroSection from "@/components/intro-section/intro-section";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.gallery_section}>
        <HeroGallery />
      </section>
      <motion.section
        className={styles.intro_section}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <IntroSection />
      </motion.section>
    </div>
  );
}
