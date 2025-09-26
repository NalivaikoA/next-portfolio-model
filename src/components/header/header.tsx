"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import styles from "./header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { href: "/", label: "ГЛАВНАЯ" },
    { href: "/portfolio", label: "ПОРТФОЛИО" },
    { href: "/about", label: "ОБО МНЕ" },
    { href: "/contact", label: "КОНТАКТЫ" },
  ];

  return (
    <header className={styles.header}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/roomsyntax"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/79265967017"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={styles.socialLink}
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/alexnalivaiko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className={styles.socialLink}
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.youtube.com/TheMayaLive"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={styles.socialLink}
          >
            <FaYoutube />
          </a>
        </div>

        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav
          className={clsx(styles.nav, { [styles.open]: isMenuOpen })}
          aria-label="Главное меню"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={clsx({ [styles.activeLink]: pathname === href })}
            >
              {label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};
