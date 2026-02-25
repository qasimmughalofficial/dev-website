import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className="theme-container">
                <div className={styles.footerInner}>
                    <div className={styles.topSection}>
                        <h3 className={styles.logo}>DevCritters</h3>
                        <div className={styles.socialIcons}>
                            <Link href="https://www.facebook.com/devcritters">
                                <Image className={styles.footerIcon} src="/images/facebook.svg" alt="facebook" width={15} height={20} />
                            </Link>
                            <Link href="https://x.com/devcritters">
                                <Image className={styles.footerIcon} src="/images/twitter.svg" alt="twitter" width={20} height={20} />
                            </Link>
                            <Link href="https://www.instagram.com/devcritters/">
                                <Image className={styles.footerIcon} src="/images/instagram.svg" alt="instagram" width={20} height={20} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.bottomSection}>
                        <p className={styles.bottomText}>&copy; {currentYear} - All Rights Reserved by DevCritters</p>
                        <div className={styles.bottomLinks}>
                            <Link href="/">Privacy policy</Link>
                            <Link href="/">Terms & conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;