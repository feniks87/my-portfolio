import React from 'react';
import Logo from '../../assets/img/logo.png';
import styles from './LogoComponent.module.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const LogoComponent = () => (
    <NavLink className={styles.Link} to="/#home">
            <img src={Logo} alt="Logo" className={styles.Logo}/>
            <div className={styles.Name}>Kate Shaitarova</div>
    </NavLink>
)

export default LogoComponent;