import styles from './Header.module.css'
import logo from '../../assets/mainLogo.svg'
import {useState} from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState(1);

  const links = [
    {id: 1, name: 'Home'},
    {id: 2, name: 'Services', subMenu: true},
    {id: 3, name: 'About', subMenu: true},
    {id: 4, name: 'Book now'},
    {id: 5, name: 'Shop', subMenu: true},
    {id: 6, name: 'Blog'},
    {id: 7, name: 'Contact Algotech'},
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setLink = (id: number) => {
    setCurrentLink(id)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.header__mainInformation}>
          <a href='/'>
            <img src={logo} className={styles.header__logo} alt="logo"/>
          </a>
          <div className={styles.header__phone}>
            <p className={styles.phone__text}>need help?</p>
            <p className={styles.phone__number}>(514) 543-9936</p>
          </div>
        </div>
        <nav className={styles.header__nav}>
          {links.map((link) => {
              return (
                <div
                  className={`${styles.header__link} ${currentLink === link.id ? styles.header__linkActive : ''}`}
                  key={link.id}
                  onClick={() => setLink(link.id)}
                >
                  {link.name}
                  {link.subMenu && <span className="material-symbols-outlined">
                        expand_more
                      </span>
                  }
                </div>
              )
              }
            )
          }
        </nav>
        <div className={styles.header__burger}>
          <span className="material-symbols-outlined" onClick={toggleMenu}>
          menu
          </span>
          {isOpen && (
            <ul className={styles.burger__list}>
              <li>Home</li>
              <li>Services</li>
              <li>Book now</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Contact Algotech</li>
            </ul>
          )}
        </div>
        </div>
      </header>
    )
};
