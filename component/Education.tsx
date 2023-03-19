import React from 'react'
import Image from "next/image";
import Subtitle from './UI/Subtitle'
import { education } from '../contexts/data/educationData'
import { IEducation } from '../contexts/props'
import EduationCard from './UI/EduationCard'
import eduGreen from '../public/assets/eduGreen.png'
import styles from '../styles/Education.module.css'


const Education: React.FC = () => {
    return (
        <div id='education' >
            <Subtitle subtitle='Education' />
            <div className={`${styles.education__container}`}>
                <div className={`${styles.education__detail}`}>
                    <EduationCard education={education} />
                </div>
                <div className={`${styles.education__img}`}>
                    <Image
                        src={eduGreen}
                        width="600px"
                        height="600px"
                        objectFit="contain"
                        alt="학습이미지"
                    />
                </div>
            </div>
        </div>
    )
}

export default Education