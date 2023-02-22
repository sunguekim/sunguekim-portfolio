import { GetStaticProps } from 'next'
import { projects } from '../../contexts/data/projectData'
import { IProject } from '../../contexts/props';
import { BiChevronLeft } from "react-icons/bi"
import Image from 'next/image';
import Head from "next/head";
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText'
import styles from '../../styles/ProjectDetail.module.css'
import Link from 'next/link';
import Divider from '@mui/material/Divider';

interface Props {
    project: IProject
}

const Project: React.FC<Props> = ({ project }) => {
    return (

        <div className={`${styles.project__wrapper}`}>
            <Head>
                <title>김선규 프로젝트</title>
            </Head>
            <div className={`${styles.project__container}`}>
                <div>
                    <Link href="/#project">
                        <div className={`${styles.project__backlink}`}>
                            <BiChevronLeft size={25} />back
                        </div>
                    </Link>
                </div>

                <h1>
                    {project.title}
                </h1>
                <div className={`${styles.project__image}`}>
                    <Image src={project.image} alt="bla" layout="fill" objectFit="cover" />
                </div>
                <h2>
                    Description
                </h2>
                <div className="desc">
                    <p>{project.desc}</p>

                    <h2>Tech Stack</h2>
                    <p>Primary SKill: {project.detail.techStack.primary}</p>
                    <p>Sub Skill:</p>
                    <List sx={{ marginTop: -2 }} component={Stack} direction="row">
                        <ListItem disablePadding>
                            {project.detail.techStack.additional.map((tech, index) => (
                                <ListItemButton key={index}>
                                    <ListItemText sx={{ textAlign: "center", marginLeft: -1 }} primary={tech} />
                                    <Divider sx={{ borderRightWidth: 2, marginRight: -2 }} orientation="vertical" flexItem />
                                </ListItemButton>
                            ))}
                        </ListItem>
                    </List>
                    <h2>Objective</h2>
                    <p>{project.detail.objective}</p>
                    <h2>Pages</h2>
                    {project.detail.pages.map((page, index) => (
                        <ListItemButton key={index}>
                            <ListItemText sx={{ textAlign: "center" }} primary={page} />
                            <Divider />
                        </ListItemButton>
                    ))}
                    <h2>Key Learnings</h2>
                    <p>{project.detail.keyLearnings}</p>

                    <h2>Review</h2>
                    <p>{project.detail.review}</p>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = projects.map((project) => ({
        params: { id: project.url },
    }))
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = (context) => {
    const { params } = context
    const project = projects.find((p) => p.url == params?.id);

    return { props: { project } };
}

export default Project;