import React, { useState } from 'react'
import styles from '../../styles/Project.module.css'
import Image from 'next/image'
import Icon from '@mui/material/Icon';
import { IProject } from '../../contexts/props'
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';


const CoverCard = (
    <Paper
        sx={{
            display: "flex",
            position: 'absolute',
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            backgroundColor: 'rgba(1, 210, 147, 0.9)',
        }}
        elevation={4}
    >
        <Box sx={{ p: 2, color: "#fff", fontSize: "30px" }}>
            <p>View More</p>
            <ArrowDownwardIcon />
        </Box>
    </Paper>
)

const ProjectCard = (project: IProject) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    return (
        <div className={`${styles.projcet__container}`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div className={`${styles.project__card}`} >
                <Image
                    layout='responsive'
                    width={600}
                    height={400}
                    objectFit='cover'
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src={project.image}
                    className={`${styles.project__img}`}
                />
                <h3>{project.title}</h3>
                <hr />
                <div className={`${styles.projcet__desc}`} id="projectDesc">
                    {project.desc}
                </div>
                <div className={`${styles.projcet__skill}`}>
                    <div className={`${styles.projcet__title}`}>Skill Stack</div>
                    <hr />
                    <ul>
                        {project.skill.map((element: string) => (
                            <li key={element}>{element}</li>
                        ))}
                    </ul>
                    <Icon baseClassName="fas" className="fa-plus-circle" />
                </div>
                {hovered && <Grow style={{ transformOrigin: '0 0 0' }} in={hovered} mountOnEnter unmountOnExit>{CoverCard}</Grow>}
            </div>
        </div>

    )
}

export default ProjectCard