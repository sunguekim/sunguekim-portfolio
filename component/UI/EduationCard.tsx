import React from 'react';
import { Fade } from 'react-awesome-reveal'
import { IEducation } from '../../contexts/props';
import { BiCalendar, BiBriefcase } from 'react-icons/bi';
import '../../styles/Test.module.css';

const EductionCard2: React.FC<IEducation> = ({ id, course, startYear, endYear, detail }) => {
    return (
        <Fade direction='up'  triggerOnce={true}>
            <div className="education-card">
                
                <div style={{ marginLeft: '1rem' }}>
                    <h3>{course}</h3>
                    <p>
                        {startYear} - {endYear === 'present' ? 'Current' : endYear}
                    </p>
                    
                    <p>{detail}</p>
                </div>
            </div>
        </Fade>
    );
};

export default EductionCard2;