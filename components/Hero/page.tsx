import Image from "next/image";
import styles from "./hero.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className="theme-container">
                <div className={styles.bannerContent}>
                    <div className={styles.bannerOverlay}></div>
                    <Image
                        src="/images/Banner.png"
                        alt="Banner"
                        fill
                        className={styles.bannerImage}
                        priority
                        sizes="100vw"
                        quality={50}
                    />
                    <h1 className={`${styles.bannerTitle} playfair-font`}>
                        Find the Perfect <span>Summer Camp</span>
                    </h1>
                    <p className={styles.bannerText}>
                        Discover 300+ accredited camps trusted by families
                    </p>
                    <div className={styles.bannerFeatures}>
                        <div className={styles.featureItems}>
                            <span className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M4.10511 3.85963C4.10511 3.85963 1.83465 4.12327 0.320057 4.29953C0.183542 4.31685 0.0628347 4.41251 0.0175692 4.55789C-0.0276963 4.70327 0.0175691 4.85467 0.118159 4.95033C1.24333 6.02672 2.93396 7.63867 2.93396 7.63867C2.93252 7.63867 2.46981 9.98352 2.16229 11.548C2.13642 11.6896 2.18528 11.8395 2.30312 11.9292C2.42023 12.0188 2.57112 12.0203 2.68967 11.9502C4.01458 11.1608 5.99908 9.97373 5.99908 9.97373C5.99908 9.97373 7.98429 11.1608 9.30705 11.951C9.42776 12.0203 9.57864 12.0188 9.69576 11.9292C9.81359 11.8395 9.86245 11.6896 9.83586 11.5488C9.52835 9.98352 9.06635 7.63867 9.06635 7.63867C9.06635 7.63867 10.757 6.02672 11.8821 4.95259C11.9827 4.85392 12.0273 4.70251 11.9827 4.55789C11.9382 4.41327 11.8175 4.31761 11.681 4.30103C10.1664 4.12327 7.8952 3.85963 7.8952 3.85963C7.8952 3.85963 6.95396 1.67673 6.32671 0.221454C6.2678 0.0911429 6.14421 0 5.99908 0C5.85394 0 5.72964 0.0918961 5.6736 0.221454C5.04563 1.67673 4.10511 3.85963 4.10511 3.85963Z" fill="white" />
                                </svg>
                            </span>
                            <span>5/5 from families & camps</span>
                        </div>
                        <div className={styles.featureItems}>
                            <span className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.65993 7.17782L2.83729 4.95964V7.8443C4.06447 8.5437 5.84988 9.42565 7.63688 9.44473C9.09935 9.45949 10.8017 8.9214 12.7025 7.84386V4.95964L7.87983 7.17779C7.81028 7.2097 7.73016 7.20999 7.65993 7.17782ZM1.06726 3.56786L1.07956 5.34812C1.40405 5.4573 1.63778 5.7641 1.63778 6.12472C1.63778 6.38552 1.51477 6.61819 1.32407 6.76846L1.56243 8.12605C1.5893 8.2858 1.46657 8.43375 1.30406 8.43375H0.333721C0.17209 8.43375 0.0469629 8.28542 0.0753516 8.12605L0.313711 6.76846C0.123018 6.61819 0 6.38552 0 6.12472C0 5.76519 0.232207 5.4593 0.555146 5.34935L0.539766 3.32525L7.76912 0L15 3.32525L7.76912 6.65065L1.06726 3.56786Z" fill="white" />
                                </svg>
                            </span>
                            <span>300+ Courses Featured</span>
                        </div>
                        <div className={styles.featureItems}>
                            <span className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                    <path d="M10.9987 6.83009V1.64484L7.50615 0H3.49352L0.00114526 1.64478V6.83009C-0.0766004 9.44405 3.82431 11.4052 5.499 12C8.18633 11.0216 11.071 9.02511 10.9987 6.83009ZM4.8297 8.46247L1.51175 5.30492L2.93594 3.94957L4.8297 5.75178L8.064 2.67383L9.4882 4.02918L4.8297 8.46247Z" fill="white" />
                                </svg>
                            </span>
                            <span>BETA Accredited</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}