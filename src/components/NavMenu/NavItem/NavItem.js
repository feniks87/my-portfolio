import React from 'react';
import styles from './NavItem.module.css';

const NavItem = (props) => (
    <li className={styles.NavItem}><a href={props.link} className={styles.NavLink}>{props.children}</a></li>
)

export default NavItem;