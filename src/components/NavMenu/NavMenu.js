import React from 'react';
import styles from './NavMenu.module.css';
import Logo from '../../assets/img/logo.png';
import NavItem from './NavItem/NavItem';

const NavMenu = () => (
    <div className={styles.NavMenu}>
        <div className={styles.Wrapper}>
            <img src={Logo} alt="Logo" className={styles.Logo}/>
            <div className={styles.Name}>Kate Shaitarova</div>
        </div>

        <nav className={styles.NavItems}>
            <NavItem link="/about">About</NavItem>
            <NavItem link="/projects">Projects</NavItem>
            <NavItem link="/contact">Contact</NavItem>
        </nav>
    </div>
)

export default NavMenu;