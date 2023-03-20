import React from 'react'
import Image from "next/image";
import Subtitle from './UI/Subtitle'
import { education } from '../contexts/data/educationData'
import { IEducation } from '../contexts/props'
import EduationCard from './UI/EduationCard'
import eduGreen from '../public/assets/eduGreen.png'
import styles from '../styles/Education.module.css'
import { Divider } from '@mui/material';


const Education: React.FC = () => {
    return (
        <div id='education' >
            <Subtitle subtitle='Education' />
            <Divider sx={{bgcolor:"#01d29383"}}/>
            <div className={`${styles.education__container}`}>
                    <EduationCard education={education} />
            </div>
        </div>
    )
}

export default Education