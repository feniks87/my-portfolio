import React from 'react';
import styles from './NavMenu.module.css';
import NavItem from './NavItems/NavItem/NavItem';
import NavItems from './NavItems/NavItems';
import Logo from '../LogoComponent/LogoComponent';

const NavMenu = (props) => (
    <div className={styles.NavMenu}>
        <Logo />
        <nav>
            <NavItems />
        </nav>
    </div>
)

export default NavMenu;