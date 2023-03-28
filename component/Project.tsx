import React from 'react'
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal'
import { Container, Divider } from '@mui/material';
import { projects } from '../contexts/data/projectData'
import Subtitle from './UI/Subtitle';
import ProjectCard from './UI/ProjectCard';
import styles from '../styles/Project.module.css'


const Project = () => {
    return (
        <div id='project' style={{ paddingTop: "100px", justifyContent: "center" }}>
            <Container>
                <Subtitle subtitle='Project' />
                <Fade direction='up' triggerOnce={true}>
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
                </Fade>
            </Container >
        </div >
    )
}

export default Project;