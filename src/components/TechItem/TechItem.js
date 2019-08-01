import React from 'react';
import styles from './TechItem.module.css';

const TechItem = (props) => (
    <div className={styles.TechItem}>{props.children}</div>
);

export default TechItem;