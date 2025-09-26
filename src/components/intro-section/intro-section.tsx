import VideoPlayer from "@/components/video-player/video-player";
import styles from "./intro-section.module.scss";

const basePath =
  process.env.NODE_ENV === "production" ? "/next-portfolio-model" : "";

export default function IntroSection() {
  return (
    <>
      <div className={styles.videoContainer}>
        <VideoPlayer src={`${basePath}/videos/hero-video.mp4`} />
      </div>
      <div className={styles.textContent}>
        <h2>Привет, меня зовут Майя</h2>
        <p>
          Я живу в России и Турции и увлекаюсь модой с раннего детства. Мне
          нравится сниматься в фотосессиях, работать с разными фотографами и
          изучать мир моды изнутри.
        </p>
        <p>
          Это мой портфолио-сайт, где вы можете увидеть мои фотографии, видео и
          узнать немного больше обо мне.
        </p>
      </div>
    </>
  );
}
