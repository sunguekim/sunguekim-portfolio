import React from 'react'
import Grid from '@mui/material/Grid';
import Subtitle from './UI/Subtitle';
import { Container } from '@mui/material';
import { Box, Divider, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Email, Phone, GitHub } from '@mui/icons-material';
import resumeImg from '../public/images/resume.jpg'
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <div id='contact' className={`${styles.contact}`}>
            <Container>
                <Subtitle subtitle='Contact Me' />
                <Divider sx={{ bgcolor: "#01d29383" }} />
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: "40px"  }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={resumeImg}
                                alt="Live from space album cover"
                            />
                        </CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Email sx={{ fontSize: 20, mr: 1 }} />
                                <Typography variant="body1" sx={{ fontSize: 16 }}>sunguekim96@gmail.com</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Phone sx={{ fontSize: 20, mr: 1 }} />
                                <Typography variant="body1" sx={{ fontSize: 16 }}>010-5119-9710</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <GitHub sx={{ fontSize: 20, mr: 1 }} />
                                <Typography variant="body1" sx={{ fontSize: 16 }}><a href="https://github.com/sunguekim">https://github.com/sunguekim</a></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Container>
        </div >
    );
};

export default Contact;