import styles from './Footer.module.css'
import logo from '../../assets/footerLogo.svg'
export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h4 className={styles.title}>Departments</h4>
          <p className={styles.categories}>Medical</p>
          <p className={styles.categories}>Pharmaceuticals</p>
          <p className={styles.categories}>Medical Equipment</p>
        </div>
        <div className={styles.card}>
          <h4 className={styles.title}>Quick Links</h4>
          <p className={styles.categories}>What do we do?</p>
          <p className={styles.categories}>Our expertise</p>
          <p className={styles.categories}>Request an Appointme</p>
          <p className={styles.categories}>Book with a Speciali</p>
        </div>
        <div className={styles.card}>
          <h4 className={styles.title}>Head Office</h4>
          <p className={styles.categories}>
            <span className="material-symbols-outlined">
              location_on
            </span>
            4517 Washington Ave. Manchester, Kentucky 39495</p>
          <p className={styles.categories}>
            <span className="material-symbols-outlined">
              mail
            </span>
            darrell@mail.com
          </p>
          <p className={styles.categories}>
            <span className="material-symbols-outlined">
              call
            </span>
            (671) 555-0110
          </p>
        </div>
        <div className={styles.card}>
          <img src={logo} className={styles.footer__logo} alt="logo"/>
          <p className={styles.categories}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit tincidunt ut sed. Velit euismod integer convallis ornare eu.
          </p>
        </div>
      </div>
      <div className={styles.date}>
        ©2019 All Rights Res
      </div>
    </div>
  </footer>
);
