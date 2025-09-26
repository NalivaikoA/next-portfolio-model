"use client";

import { motion } from "framer-motion";
import styles from "./page.module.scss";

export default function AboutPage() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={styles.title}>О Майе</h1>

      <p className={styles.intro}>
        Привет! Меня зовут <span className={styles.accent}>Майя</span>. Я живу в{" "}
        <strong>России</strong> и <strong>Турции</strong>. Люблю сниматься в
        фотосессиях, работать с фотографами и открывать для себя мир моды
        изнутри.
      </p>

      <div className={styles.section}>
        <h2>Мои увлечения</h2>
        <ul>
          <li>
            Занимаюсь акробатикой и танцами в стиле <em>rap</em>
          </li>
          <li>Катаюсь на горных лыжах</li>
          <li>Люблю ходить в кино, гулять и путешествовать с родителями</li>
          <li>
            Записываю короткие ролики о путешествиях для своего{" "}
            <a
              href="https://www.youtube.com/TheMayaLive"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={styles.youtube}
            >
              YouTube-канала
            </a>
          </li>
          <li>Играю в бадминтон, баскетбол, футбол и немного бегаю</li>
          <li>Люблю читать книги</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>О сайте</h2>
        <p>
          Этот сайт — моё портфолио. Здесь можно увидеть мои фотографии, видео и
          немного узнать обо мне.
        </p>
      </div>
    </motion.div>
  );
}
