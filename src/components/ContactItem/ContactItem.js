import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = (props) => (
    <div className={styles.ContactItem}>{props.children}</div>
);

export default ContactItem;