import React from 'react'
import styles from '../../styles/Project.module.css'
import Image from 'next/image'
import { IProject } from '../../contexts/props'

const ProjectCard = (project: IProject) => {
    return (
        <div className={`${styles.project__card}`} >
            <Image
                layout='responsive'
                width={600}
                height={400}
                src={project.image}
                className={`${styles.project__img}`}
            />
            <h3>{project.title}</h3>
            <hr />
            <p>
                {project.desc}
            </p>
            <div>
                <div className={`${styles.projcet__title}`}>Skill Stack</div>
                <hr />
                <ul>
                    {project.skill.map((element: string) => (
                        <li key={element}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard