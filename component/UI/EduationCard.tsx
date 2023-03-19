import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Fade } from 'react-awesome-reveal'
import { EduList, IEducation } from '../../contexts/props';
import { BiCalendar, BiBriefcase } from 'react-icons/bi';
import styles from '../../styles/Education.module.css'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const allyProps = (index: number) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const EductionCard2: React.FC<EduList> = ({ education }) => {

    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newVlaue: number) => {
        setValue(newVlaue)
    }

    return (
        <Fade direction='up' triggerOnce={true}>
            {/* <div className={`${styles.education__card}`}>
                <div style={{ marginLeft: '1rem' }}>
                    <h3>{course}</h3>
                    <p>
                        {startYear} - {endYear === 'present' ? 'Current' : endYear}
                    </p>
                    <p>{detail}</p>
                </div>
            </div> */}
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', justifyContent: 'center', alignItems: 'center' }}
                >
                    {education && education.map(({ id, course }, index) => (
                        <Tab label={`${course}`} {...allyProps(0)} sx={{ fontSize: '18px', fontWeight: 600 }} />
                    ))}
                </Tabs>
                {education && education.map(({ id, course, detail }, index) => (
                    <TabPanel
                        key={id}
                        value={value}
                        index={index}
                    >
                        <Typography variant="h6" gutterBottom>
                            {course}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {detail}
                        </Typography>
                        <Typography color="textSecondary">
                            {`${education[index].startYear} - ${education[index].endYear}`}
                        </Typography>
                    </TabPanel>
                ))}
            </Box>
        </Fade>
    );
};

export default EductionCard2;