import React from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = (props) => (
    <div className={styles.ToggleButton} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default ToggleButton;