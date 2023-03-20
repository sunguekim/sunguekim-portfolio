import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Fade } from 'react-awesome-reveal'
import { EduList } from '../../contexts/props';
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
    const isMobile = useMediaQuery("(max-width:768px)");
    const handleChange = (event: React.SyntheticEvent, newVlaue: number) => {
        setValue(newVlaue)
    }

    return (
        <Fade direction='up' triggerOnce={true}>
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center'}}>
                    <Tabs
                        orientation={isMobile ? "horizontal" : "vertical"}
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="educationInfo"
                        sx={{ borderRight: 1, borderColor: 'divider', justifyContent: 'center', alignItems: 'center', }}
                    >
                        {education && education.map(({ id, course }, index) => (
                            <Tab key={id} label={`${course}`} {...allyProps(0)} sx={{ fontSize: '18px', fontWeight: 600 }} />
                        ))}
                    </Tabs>
                    <Box>
                        {education && education.map(({ id, course, detail,learningDetail }, index) => (
                            <TabPanel
                                key={id}
                                value={value}
                                index={index}
                            >
                                <Box mb={4} >
                                    <Typography variant="h4" component="h2" gutterBottom>
                                        {course}
                                    </Typography>
                                </Box>
                                <Box mb={4}>
                                    <Typography variant="body1" gutterBottom>
                                        {detail}
                                    </Typography>
                                </Box>
                                <Box mb={4} >
                                    <Typography color="textSecondary" variant="caption">
                                        {`${education[index].startYear} - ${education[index].endYear}`}
                                    </Typography>
                                </Box>
                                <Box mb={4}>
                                    <Typography variant="body1" gutterBottom>
                                        {learningDetail}
                                    </Typography>
                                </Box>
                            </TabPanel>
                        ))}
                    </Box>
                </Box>
        </Fade>
    );
};

export default EductionCard2;