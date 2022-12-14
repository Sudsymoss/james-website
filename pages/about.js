import Head from "next/head";
import styles from "../styles/About.module.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className={styles.main}>
        <h1>About</h1>
      </main>
      <div className={styles.aboutbox}>
        <section className={styles.about}>
          <h3>About</h3>
          <p>
            This is a personal site made with next js to showcase my skills
            <br />
            Also this is the 2nd revision of this site (hopefuly a better
            version!).
          </p>
        </section>
        <section className={styles.about}>
          <h3>Some of my other work:</h3>
          <p>(comming soon)</p>
        </section>
        <section className={styles.about}>
          <h3>Why use an account?</h3>
          <p>With an account you get access to:</p>
          <ul className={styles.aboutlist}>
            <li>View certain projects</li>
            <li>More comming soon...</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}
