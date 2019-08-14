import React from 'react';
import styles from './NavBar.module.css';
import NavItems from '../NavMenu/NavItems/NavItems';
import Logo from '../LogoComponent/LogoComponent';
import ToggleButton from '../UI/ToggleButton/ToggleButton';

const NavBar = (props) => (
    <div className={styles.NavBar}>
        <Logo />
        <ToggleButton clicked={props.toggleButtonClicked}/>
        <nav className={styles.DesktopOnly}>
            <NavItems />
        </nav>
    </div>
)

export default NavBar;