import React from 'react';
import styles from './AboutSection.module.css';
import Heading from '../../components/Heading/Heading';
import Photo from '../../assets/img/photo.jpg';

const AboutSection = () => (
    <div className={styles.AboutSection}>
        <Heading>About me</Heading>
        <div className={styles.Description}>
            <p>I am a self-motivated Front-end  Web Developer, based in Auckland, New Zealand, who is always ready to turn up sleeves and acquire new skills in web development.</p>
            <p>After completing a Software Development course at one of the Auckland colleges I continued enhancing my skills in web development working on projects using such technologies as HTML, CSS, JavaScript, React.js, Redux, SQL, MongoDB etc.</p>
            <p>I am also passionate about providing great user experience as well as learning the latest technologies. As a user myself, I strongly believe product success is highly dependent on user emotions and attitude about his interaction with a product or system, while new technologies in most cases are intended to enhance user satisfaction.</p>
            <p>In my spare time I love to do some outdoor activities with my family, in particular, exploring incredible New Zealand nature.</p>
        </div>
        <div className={styles.Photo}>
            <img src={Photo} alt="Photo"/>
        </div>
    </div>
);

export default AboutSection;