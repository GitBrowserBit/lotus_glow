'use client'
import Hero from "./ui/components/sections/Hero";
import Header from "./ui/components/utils/Header";
import styles from "./ui/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
