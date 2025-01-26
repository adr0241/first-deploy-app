import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello world!</h1>
        <p>Test Nextjs App by Adi &#128522;</p>
      </main>
    </div>
  );
}
