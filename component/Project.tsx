import React from 'react'
import Subtitle from './UI/Subtitle';
import { projects } from '../contexts/data/projectData'
import Link from 'next/link';
import { Container } from '@mui/material';
import ProjectCard from './UI/ProjectCard';
import styles from '../styles/Project.module.css'
import { Divider } from '@mui/material';

const Project = () => {
    return (
        <div id='project'>
            <Container>
                <Subtitle subtitle='Project' />
                <Divider sx={{ bgcolor: "#01d29383" }} />
                <div className={`${styles.project__section}`}>
                    {projects.map((project) => (
                        <Link key={project.id} href={`projects/${project?.url}`}>
                            <a style={{ textDecoration: "none", color: "inherit" }}>
                                <ProjectCard key={project.id} {...project} />
                            </a>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Project;