import React from 'react';
import styles from './Layout.module.css';
import NavMenu from '../../components/NavMenu/NavMenu';
import Header from '../../containers/Header/Header';
import AboutSection from '../../containers/AboutSection/AboutSection';


const Layout = () => {
    return (
        <div className={styles.Layout}>
            <NavMenu/>
            <Header/>
            <AboutSection/>
        </div>
    );
}

export default Layout;