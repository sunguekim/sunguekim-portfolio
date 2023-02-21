import { GetStaticProps } from 'next'
import { projects } from '../../contexts/data/projectData'
import { IProject } from '../../contexts/props';
import { BiChevronLeft } from "react-icons/bi"
import Image from 'next/image';
import styles from '../../styles/ProjectDetail.module.css'
import Link from 'next/link';

interface Props {
    project: IProject
}

const Project: React.FC<Props> = ({ project }) => {
    return (
        <div className={`${styles.project__wrapper}`}>
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
                    <ul>
                        {project.detail.techStack.additional.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>

                    <h2>Objective</h2>
                    <p>{project.detail.objective}</p>

                    <h2>Pages</h2>
                    <ul>
                        {project.detail.pages.map((page, index) => (
                            <li key={index}>{page}</li>
                        ))}
                    </ul>

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