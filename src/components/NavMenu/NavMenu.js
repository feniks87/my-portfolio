import React from 'react';
import styles from './NavMenu.module.css';
import Logo from '../../assets/img/logo.png';

const NavMenu = () => (
    <div className={styles.NavMenu}>
        <div className={styles.Wrapper}>
            <img src={Logo} alt="Logo" className={styles.Logo}/>
            <div className={styles.Name}>Kate Shaitarova</div>
        </div>

        <nav className={styles.NavItems}>
            <li className={styles.NavItem}><a href="/" className={styles.NavLink}>About</a></li>
            <li className={styles.NavItem}><a href="/Projects" className={styles.NavLink}>Projects</a></li>
            <li className={styles.NavItem}><a href="/Contact" className={styles.NavLink}>Contact</a></li>
        </nav>
    </div>
)

export default NavMenu;


