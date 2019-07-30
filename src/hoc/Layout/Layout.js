import React from 'react';
import styles from './Layout.module.css';
import NavMenu from '../../components/NavMenu/NavMenu';
import Header from '../../containers/Header/Header';
import AboutSection from '../../containers/AboutSection/AboutSection';
import SkillSection from '../../containers/SkillSection/SkillSection';


const Layout = () => {
    return (
        <div className={styles.Layout}>
            <NavMenu/>
            <Header/>
            <AboutSection/>
            <SkillSection/>
        </div>
    );
}

export default Layout;