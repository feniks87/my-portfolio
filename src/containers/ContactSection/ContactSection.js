import React from 'react';
import styles from './ContactSection.module.css';
import Heading from '../../components/Heading/Heading';
import ContactItem from '../../components/ContactItem/ContactItem';

import { ReactComponent as MailIcon } from '../../assets/svg/envelop.svg';
import { ReactComponent as PhoneIcon } from '../../assets/svg/phone.svg';
import { ReactComponent as TelegamIcon } from '../../assets/svg/telegram.svg';

const ContactSection = () => (
    <section id="contact" className={styles.ContactSection}>
        <Heading headingStyle="HeadingWhite">Contact me</Heading>
        <div className={styles.ContactInfo}>
            <div className={styles.Text}>
                <h1>Want to get in touch?</h1>
                <p>Choose one of the options <span>&rarr;</span></p>
            </div>
            <div className={styles.Contacts}>
                <div className={styles.ContactGroup}>
                    <MailIcon className={styles.Icon}/>
                    <ContactItem>kate.shaitarova@gmail.com</ContactItem>
                </div>
                <div className={styles.ContactGroup}>
                    <PhoneIcon className={styles.Icon}/>
                    <ContactItem>022-051-71-57</ContactItem>
                </div>
                <div className={styles.ContactGroup}>
                    <TelegamIcon className={styles.Icon}/>
                    <ContactItem>feniks_87</ContactItem>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;