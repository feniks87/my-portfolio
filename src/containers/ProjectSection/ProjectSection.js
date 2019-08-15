import React from 'react';
import styles from './ProjectSection.module.css';
import Heading from '../../components/Heading/Heading';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';
import TechItem from '../../components/TechItem/TechItem';

import Project1 from '../../assets/img/project-1.png';
import Project2 from '../../assets/img/project-2.png';
import Project3 from '../../assets/img/project-3.png';
import Project4 from '../../assets/img/project-4.png';
import Project5 from '../../assets/img/project-5.png';



const ProjectSection = () => (
    <section id="projects" className={styles.ProjectSection}>
        <Heading headingStyle="HeadingPink">Projects</Heading>
        <div className={styles.Projects}>
            <div className={styles.ProjectItem}>
                <a href="https://the-bk-hairdressing.web.app/" target="_blank"><img src={Project1} alt="Project 1"/></a>
                <div className={styles.ProjectDescription}>
                    <ProjectDescription
                        name="The BK Hairdressing"
                        url="https://the-bk-hairdressing.web.app/"
                        description="A hairdressing salon web application, implemented using React with Redux state management (study project)."/>
                    <div className={styles.Tech}>
                        <TechItem>JavaScript</TechItem>
                        <TechItem>React.js</TechItem>
                        <TechItem>Redux</TechItem>
                        <TechItem>CSS</TechItem>
                        <TechItem>Bootstrap</TechItem>
                    </div>
                </div>
            </div>

            <div className={styles.ProjectItem}>
                <a href="https://react-shopping-list-a5bb8.web.app/" target="_blank"><img className={styles.ProjectImage} src={Project2} alt="Project 2"/></a>
                <div className={styles.ProjectDescription}>
                    <ProjectDescription
                        name="Shopping List"
                        url="https://react-shopping-list-a5bb8.web.app/"
                        description="Small React application for planning and managing my shopping with responsive design."/>
                    <div className={styles.Tech}>
                        <TechItem>JavaScript</TechItem>
                        <TechItem>React.js</TechItem>
                        <TechItem>CSS</TechItem>
                        <TechItem>Bootstrap</TechItem>
                    </div>
                </div>
            </div>

            <div className={styles.ProjectItem}>
                <a href="https://feniks87.github.io/pure-nz/" target="_blank"><img className={styles.ProjectImage} src={Project3} alt="Project 3"/></a>
                <div className={styles.ProjectDescription}>
                    <ProjectDescription
                        name="Pure NZ"
                        url="https://feniks87.github.io/pure-nz/"
                        description="Website theme for a travel agency app, filled with pure CSS animation effects and implemented while learning advanced CSS features. Built with following BEM methodology and Sass."/>
                    <div className={styles.Tech}>
                        <TechItem>HTML</TechItem>
                        <TechItem>CSS</TechItem>
                        <TechItem>SASS</TechItem>
                    </div>
                </div>
            </div>

            <div className={styles.ProjectItem}>
                <a href="https://feniks87.github.io/fenix/" target="_blank"><img className={styles.ProjectImage} src={Project4} alt="Project 4"/></a>
                <div className={styles.ProjectDescription}>
                    <ProjectDescription
                        name="Fenix"
                        url="https://feniks87.github.io/fenix/"
                        description="Web page theme for a travel booking app, built while learning CSS Flexbox layout. Implemented with following BEM methodology and Sass."/>
                    <div className={styles.Tech}>
                        <TechItem>HTML</TechItem>
                        <TechItem>CSS</TechItem>
                        <TechItem>SASS</TechItem>
                    </div>
                </div>
            </div>

            <div className={styles.ProjectItem}>
                <a href="https://feniks87.github.io/nexter/" target="_blank"><img className={styles.ProjectImage} src={Project5} alt="Project 5"/></a>
                <div className={styles.ProjectDescription}>
                    <ProjectDescription
                        name="Nexter"
                        url="https://feniks87.github.io/nexter/"
                        description="Landing page theme for a real estate agency, built while learning CSS Grid layouts. Implemented with following BEM methodology and Sass. Design by Jonas Schmedtmann."/>
                    <div className={styles.Tech}>
                        <TechItem>HTML</TechItem>
                        <TechItem>CSS</TechItem>
                        <TechItem>SASS</TechItem>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ProjectSection;