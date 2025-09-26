"use client";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./page.module.scss";

export default function ContactPage() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={styles.name}>МАЙЯ</h1>

      <ul className={styles.contactList}>
        <li>
          <FaPhoneAlt className={styles.icon} />
          <a href="tel:+79035552011" className={styles.link}>
            +7 (903) 555-20-11
          </a>
        </li>
        <li>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:tatyanka2098@yandex.ru" className={styles.link}>
            tatyanka2098@yandex.ru
          </a>
        </li>
        <li>
          <FaMapMarkerAlt className={styles.icon} />
          Москва / Аланья (Турция)
        </li>
      </ul>

      <p className={styles.note}>
        Для связи со мной можно написать моей маме —
        <br />
        <span className={styles.bold}>Татьяна</span>
      </p>

      <p className={styles.messengerPrompt}>
        пишите в удобный для вас мессенджер
      </p>

      <div className={styles.buttons}>
        <a
          href="https://wa.me/79035552011"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(styles.button, styles.matrix)}
        >
          <FaWhatsapp size={20} />
          <span>WhatsApp</span>
          <div className={styles.code_rain}></div>
        </a>
        <a
          href="https://t.me/alexnalivaiko"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(styles.button, styles.telegram)}
        >
          <FaTelegramPlane size={20} />
          <span>Telegram</span>
          <div className={styles.code_rain}></div>
        </a>
      </div>
    </motion.div>
  );
}
