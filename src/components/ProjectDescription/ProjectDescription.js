import React from 'react';
import styles from './ProjectDescription.module.css';

const ProjectDescription = (props) => (
    <div className={styles.ProjectDescription}>
        <a href={props.url} target="_blank" rel="noopener noreferrer"><h3>{props.name}</h3></a>
        <p>{props.description}</p>
    </div>

)

export default ProjectDescription;