import React from 'react';
import { IEducation } from '../../contexts/props';
import { BiCalendar, BiBriefcase } from 'react-icons/bi';
import '../../styles/Test.module.css';

const EductionCard2: React.FC<IEducation> = ({ id, course, startYear, endYear, detail }) => {
    return (
        <div className="education-card">
            <BiCalendar size={24} />
            <div style={{ marginLeft: '1rem' }}>
                <h3>{course}</h3>
                <p>
                    {startYear} - {endYear === 'present' ? 'Current' : endYear}
                </p>
                <BiBriefcase size={24} style={{ marginRight: '0.5rem' }} />
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default EductionCard2;