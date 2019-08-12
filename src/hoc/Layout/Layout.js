import React, {useState} from 'react';
import styles from './Layout.module.css';
import NavBar from '../../components/NavMenu/NavBar';
import BurgerMenu from '../../components/NavMenu/BurgerMenu/BurgerMenu';
import Header from '../../containers/Header/Header';
import AboutSection from '../../containers/AboutSection/AboutSection';
import SkillSection from '../../containers/SkillSection/SkillSection';
import ProjectSection from '../../containers/ProjectSection/ProjectSection';
import ContactSection from '../../containers/ContactSection/ContactSection';
import Footer from '../../containers/Footer/Footer';



const Layout = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleHandler = () => setOpen(prevState => !prevState);

    const closeHandler = () => setOpen(!isOpen);

    return (
        <div id="home" className={styles.Layout}>
            <NavBar toggleButtonClicked={toggleHandler}/>
            <BurgerMenu open={isOpen} closed={closeHandler}/>
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