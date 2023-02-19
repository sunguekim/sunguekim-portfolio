import React from 'react'
import Subtitle from './UI/Subtitle';
import { projects } from '../contexts/data/projectData'
import Link from 'next/link';
import ProjectCard from './UI/ProjectCard';
import styles from '../styles/Project.module.css'

const Project = () => {
    return (
        <section id='project'>
            <Subtitle subtitle='Project' />
            <div className={`${styles.project__section}`}>
                {projects.map((project) => (
                    <Link key={project.id} href={`projects/${project?.url}`}>
                        <a style={{ textDecoration: "none", color: "inherit" }}>
                            <ProjectCard key={project.id} {...project} />
                        </a>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Project;