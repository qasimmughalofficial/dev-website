import Image from "next/image";
import styles from "./hero.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerOverlay}></div>
                <Image
                    src="/images/Banner.jpg"
                    alt="Banner"
                    fill
                    className={styles.bannerImage}
                    priority
                    sizes="100vw"
                    quality={50}
                />
                <h1 className={`${styles.bannerTitle} playfair-font`}>
                    Websites That Convert for Startups & Small Businesses
                </h1>
                {/* <p className={styles.bannerText}>
                    AI-assisted development + conversion-focused design. Launch fast, sell more.
                </p> */}
            </div>
        </section>
    );
}