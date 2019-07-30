import React from 'react';
import styles from './Heading.module.css';

const Heading = (props) => (
    <h1 className={[styles.Heading, styles[props.headingStyle]].join(' ')}>{props.children}</h1>
);

export default Heading;