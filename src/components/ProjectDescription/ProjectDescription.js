import React from 'react';
import styles from './ProjectDescription.module.css';

const ProjectDescription = (props) => (
    <div className={styles.ProjectDescription}>
        <a href={props.url} target="blank"><h1>{props.name}</h1></a>
        <p>{props.description}</p>
    </div>

)

export default ProjectDescription;