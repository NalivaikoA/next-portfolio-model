import { FaInstagram } from "react-icons/fa";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Все права защищены © 2025 | Любое копирование без согласия автора
        запрещено{" "}
      </p>
      <p className={styles.author}>
        Сайт от &nbsp;
        <a
          href="https://www.instagram.com/roomsyntax"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={styles.socialLink}
        >
          <FaInstagram />
          <span>roomsyntax</span>
        </a>
      </p>
    </footer>
  );
};
