import React from 'react'
import Subtitle from './UI/Subtitle'
import { education } from '../contexts/data/educationData'
import { IEducation } from '../contexts/props'
import EductionCard from './UI/EducationCard'
import Edu from './UI/Edu'
import '../styles/Education.module.css'


const Education: React.FC = () => {
    return (
        <section id='education'>
            <Subtitle subtitle='Education' />
            {education && education.map((data: IEducation) => (
                <Edu key={data.id} {...data} />
            ))}
        </section>
    )
}

export default Education