import React from 'react';
import styles from './SkillItem.module.css';

const SkillItem = (props) => (
    <div className={styles.SkillItem}>{props.children}</div>
);

export default SkillItem;