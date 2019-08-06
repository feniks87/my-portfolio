import React from 'react'
import styles from './NavItems.module.css';
import NavItem from '../NavItems/NavItem/NavItem';

const NavItems = () => (
    <ul className={styles.NavItems}>
        <NavItem link="/about">About</NavItem>
        <NavItem link="/about">Skills</NavItem>
        <NavItem link="/projects">Projects</NavItem>
        <NavItem link="/contact">Contact</NavItem>
    </ul>
);

export default NavItems;


