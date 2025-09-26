import { Header } from "../components/header/header";
import { Footer } from "@/components/footer/footer";
import { ScrollToTop } from "@/components/scroll-to-top/scroll-to-top";
import "../styles/globals.scss";
import styles from "./layout.module.scss";

import { inter } from "./fonts";

export const metadata = {
  title: "Портфолио | Детская модель",
  description: "Портфолио детской модели [Имя дочери]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.className}>
      <body className={styles.layout}>
        <Header />
        <main className={styles.layout_main}>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
