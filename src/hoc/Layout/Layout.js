import React from 'react';
import styles from './Layout.module.css';
import Header from '../../components/Header/Header';

const Layout = () => {
    return (
        <div className={styles.Layout}>
            <Header/>
        </div>
    );
}

export default Layout;