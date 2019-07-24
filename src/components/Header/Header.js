import React from 'react';
import styles from './Header.module.css';
import Aux from '../../hoc/Auxiliary/_Aux';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => (
    <Aux>
        <NavMenu />
        <div className={styles.Header}>
            <h1 className={styles.Greeting}>Hi, I am Kate!</h1>
            <h2 className={styles.Text}>Front-end developer</h2>
            <p className={styles.Paragraph}>Transforming design ideas into great user experience</p>
        </div>
    </Aux>
)

export default Header;