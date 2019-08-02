import React from 'react';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.Header}>
            <h1 className={styles.Greeting}>Hi, I am Kate!</h1>
            <h2 className={styles.Role}>Front-end web developer</h2>
            <p className={styles.Description}>Transforming design ideas into great user experience</p>
    </header>
)

export default Header;