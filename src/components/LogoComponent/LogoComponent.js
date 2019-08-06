import React from 'react';
import Logo from '../../assets/img/logo.png';
import styles from './LogoComponent.module.css';

const LogoComponent = () => (
    <div className={styles.Wrapper}>
        <img src={Logo} alt="Logo" className={styles.Logo}/>
        <div className={styles.Name}>Kate Shaitarova</div>
    </div>
)

export default LogoComponent;