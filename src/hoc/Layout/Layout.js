import React from 'react';
import styles from './Layout.module.css';
import NavMenu from '../../components/NavMenu/NavMenu';
import Header from '../../containers/Header/Header';
import AboutSection from '../../containers/AboutSection/AboutSection';
import SkillSection from '../../containers/SkillSection/SkillSection';
import ProjectSection from '../../containers/ProjectSection/ProjectSection';
import ContactSection from '../../containers/ContactSection/ContactSection';
import Footer from '../../containers/Footer/Footer';



const Layout = () => {
    return (
        <div className={styles.Layout}>
            <NavMenu/>
            <Header/>
            <AboutSection/>
            <SkillSection/>
            <ProjectSection/>
            <ContactSection/>
            <Footer/>
        </div>
    );
}

export default Layout;