import Image from "next/image";
import styles from "./footer.module.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <h3 className={styles.footerLogo}>DevCritters</h3>
        <div className={styles.footerSocial}>
          {/* External links use plain <a> */}
          <a
            href="https://www.facebook.com/devcritters"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook.svg"
              alt="facebook"
              width={20}
              height={20}
            />
          </a>
          <a href="https://x.com/devcritters" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/twitter.svg"
              alt="twitter"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.instagram.com/devcritters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerRights}>
          &copy; {currentYear} - All Rights Reserved by DevCritters
        </p>
        <div className={styles.footerLinks}>
          {/* Internal links use Next.js Link */}
          <a href="/">
            <span>Privacy policy</span>
          </a>
          <a href="/">
            <span>Terms & conditions</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;