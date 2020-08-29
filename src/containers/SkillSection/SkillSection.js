import React from 'react';
import styles from './SkillSection.module.css';
import Heading from '../../components/Heading/Heading';
import SkillItem from '../../components/SkillItem/SkillItem';
import { ReactComponent as HTMLLogo } from '../../assets/svg/html5.svg';
import { ReactComponent as CSSLogo } from '../../assets/svg/csswizardry.svg';
import { ReactComponent as JSLogo } from '../../assets/svg/javascript.svg';
import { ReactComponent as ReactLogo } from '../../assets/svg/react.svg';
import { ReactComponent as ReduxLogo } from '../../assets/svg/redux.svg';
import { ReactComponent as SassLogo } from '../../assets/svg/sass.svg';
import { ReactComponent as BootstrapLogo } from '../../assets/svg/bootstrap.svg';
import { ReactComponent as SQLLogo } from '../../assets/svg/mysql.svg';
import { ReactComponent as MongoLogo } from '../../assets/svg/mongodb.svg';
import { ReactComponent as GitLogo } from '../../assets/svg/git.svg';
import { ReactComponent as GraphQlLogo } from '../../assets/svg/graphql.svg';
import { ReactComponent as StyledLogo } from '../../assets/svg/styled-components.svg';


const SkillSection = () => (
    <section id="skills" className={styles.SkillSection}>
        <Heading headingStyle="HeadingWhite">My skills</Heading>
        <div className={styles.SkillItems}>
            <div className={styles.SkillGroup}>
                <HTMLLogo className={styles.SkillLogo}/>
                <SkillItem>HTML</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <CSSLogo className={styles.SkillLogo}/>
                <SkillItem>CSS</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <JSLogo className={styles.SkillLogo}/>
                <SkillItem>JavaScript</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <ReactLogo className={styles.SkillLogo}/>
                <SkillItem>React.js</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <ReduxLogo className={styles.SkillLogo}/>
                <SkillItem>Redux</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <SassLogo className={styles.SkillLogo}/>
                <SkillItem>SASS</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <BootstrapLogo className={styles.SkillLogo}/>
                <SkillItem>Bootstrap</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <StyledLogo className={styles.SkillLogo}/>
                <SkillItem>Styled Components</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <GraphQlLogo className={styles.SkillLogo}/>
                <SkillItem>GraphQL</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <SQLLogo className={styles.SkillLogo}/>
                <SkillItem>SQL</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <MongoLogo className={styles.SkillLogo}/>
                <SkillItem>MongoDB</SkillItem>
            </div>
            <div className={styles.SkillGroup}>
                <GitLogo className={styles.SkillLogo}/>
                <SkillItem>Git</SkillItem>
            </div>
        </div>
    </section>
);

export default SkillSection;