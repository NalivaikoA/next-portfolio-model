"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import { images, responsive } from "@/config/hero-gallery/hero-gallery-config";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "react-multi-carousel/lib/styles.css";
import styles from "./hero-gallery.module.scss";

export default function HeroGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Carousel
        centerMode={!isMobile}
        partialVisible={isMobile}
        arrows
        autoPlay
        autoPlaySpeed={2500}
        infinite
        pauseOnHover
        responsive={responsive}
        draggable
        swipeable
        keyBoardControl
        slidesToSlide={1}
        // minimumTouchDrag={30}
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        containerClass={styles.carouselContainer}
        // sliderClass={styles.slider}
        itemClass={styles.carouselItem}
        showDots={false}
        // transitionDuration={400}
      >
        {images.map((src, index) => (
          <div className={styles.imageWrapper} key={index}>
            <Image
              src={src}
              alt={`Фото ${index + 1}`}
              width={400}
              height={590}
              className={styles.image}
            />
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
}

// const CustomLeftArrow = ({ onClick, ...rest }: any) => {
//   // const { currentSlide } = rest.carouselState;

//   // if (currentSlide === 0) return null; // если на первом слайде — не показывать

//   return (
//     <button className={`${styles.arrow} ${styles.left}`} onClick={onClick}>
//       <HiChevronLeft size={32} />
//     </button>
//   );
// };

// const CustomRightArrow = ({ onClick, ...rest }: any) => {
//   return (
//     <button className={`${styles.arrow} ${styles.right}`} onClick={onClick}>
//       <HiChevronRight size={32} />
//     </button>
//   );
// };
