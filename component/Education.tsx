import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Subtitle from './UI/Subtitle'
import { education } from '../contexts/data/educationData'
import { IEducation } from '../contexts/props'
import EduationCard from './UI/EduationCard'
import '../styles/Education.module.css'


const Education: React.FC = () => {
    return (
        <section id='education'>
            <Subtitle subtitle='Education' />
            {education && education.map((data: IEducation) => (
                <EduationCard key={data.id} {...data} />
            ))}
        </section>
    )
}

export default Education