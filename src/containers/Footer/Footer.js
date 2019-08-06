import React from 'react';
import styles from './Footer.module.css';

import { ReactComponent as LinkeinIcon } from '../../assets/svg/linkedin.svg';
import { ReactComponent as InstaIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';

const Footer = () => (
    <footer className={styles.Footer}>
        <div className={styles.FoterContent}>
            <div className={styles.FooterIcons}>
                <a target="_blank" href="https://www.linkedin.com/in/kate-shaitarova-574655138/"><LinkeinIcon className={styles.Icon}/></a>
                <a target="_blank" href="https://www.facebook.com/shaytarova?ref=bookmarks"><FacebookIcon className={styles.Icon}/></a>
                <a target="_blank" href="https://www.instagram.com/eshaytarova/?hl=en"><InstaIcon className={styles.Icon}/></a>
                <a target="_blank" href="https://github.com/feniks87"><GithubIcon className={styles.Icon}/></a>
            </div>
            <div className={styles.Copyright}>
                &copy; 2019 Designed and built by Kate Shaitarova
            </div>
        </div>
    </footer>
);

export default Footer;