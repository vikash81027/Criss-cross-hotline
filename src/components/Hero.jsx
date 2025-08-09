import styles from "./Hero.module.css";
import Navbar from "./Navbar";
function Hero() {
  return (
    <div className={styles.hero}>
      <Navbar />
      <main className={styles.main}>
        <div>
          <h1 className={styles.mainHeading}>
            Criss Cr<span>&empty;</span>ss Hotline
          </h1>
          <p>Your gateway for seamless RTO services and vehicle insurance</p>
        </div>
        <button className={styles.btn}>
          CONTACT US <span>&rarr;</span>
        </button>
      </main>
    </div>
  );
}

export default Hero;
