import React from "react";
import styles from "./hero.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroWrapper} id="banner-home">
            <div className={styles.heroContainer}>
                <div className={styles.overlay}></div>

                <div className={styles.content}>
                    <h1 className={styles.title}>
                        DEVCRITTERS
                    </h1>
                    <p className={styles.description}>
                        WE DEVCRITTERS HELPS BUSINESSES with
                        web development, DevOps, and custom IT services.
                    </p>
                    <a href="#contact" className={styles.ctaButton}>
                        Get Free 15-min Audit
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;