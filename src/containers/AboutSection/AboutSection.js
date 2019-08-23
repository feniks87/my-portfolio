import React from 'react';
import styles from './AboutSection.module.css';
import Heading from '../../components/Heading/Heading';
import Photo from '../../assets/img/photo.jpg';

const AboutSection = () => (
    <section id="about" className={styles.AboutSection}>
        <Heading  headingStyle="HeadingPink">About me</Heading>
        <div className={styles.About}>
            <div className={styles.Photo}>
                <img src={Photo} alt="Kate"/>
            </div>
            <div className={styles.Description}>
                <p>I am a self-motivated Front-end Web Developer, based in Auckland, New Zealand.
                    I am passionate about providing great user experience and keen to work in a team with great enthusiastic people and to contribute to a product,
                    bringing value to a company. </p>
                <p>As a user myself, I know how essential it is for users to reach their goals while interacting with a website, application or a system.
                    In order to achieve user satisfaction, I do my best in writing stable and maintainable code
                    using latest technologies with the focus on attractive design.</p>
                <p>Apart from programming I love to play the piano and to do some outdoor activities with my family, in particular, exploring incredible New Zealand.</p>
            </div>
        </div>
    </section>
);

export default AboutSection;