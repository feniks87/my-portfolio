import React from 'react';
import styles from './NavItem.module.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const NavItem = (props) => (
    <li className={styles.NavItem}>
        <NavLink smooth to={props.link} activeClassName={styles.active}>
            {props.children}
        </NavLink>
    </li>
)

export default NavItem;