import React from 'react';
import styles from './Footer.module.css';

import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin.svg';
import { ReactComponent as InstaIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';

const Footer = () => (
    <footer className={styles.Footer}>
        <div className={styles.FoterContent}>
            <div className={styles.FooterIcons}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kate-shaitarova-574655138/"><LinkedinIcon className={styles.Icon}/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/shaytarova?ref=bookmarks"><FacebookIcon className={styles.Icon}/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kate_shaitarova/"><InstaIcon className={styles.Icon}/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/feniks87"><GithubIcon className={styles.Icon}/></a>
            </div>
            <div className={styles.Copyright}>
                &copy; 2020 Designed and built by Kate Shaitarova
            </div>
        </div>
    </footer>
);

export default Footer;