import React from 'react'
import Grid from '@mui/material/Grid';
import Subtitle from './UI/Subtitle';
import Image from "next/image";
import { Box, Divider, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Email, Phone, GitHub } from '@mui/icons-material';
import contactImg from '../public/assets/contact.png';
import resumeImg from '../public/images/resume.jpg'
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <div id='contact' className={`${styles.contact}`}>
            <Subtitle subtitle='Contact Me' />
            <Divider sx={{ bgcolor: "#01d29383" }} />
            {/* <Grid
                container
                marginTop={3}
                spacing={3}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    [`@media (max-width:768px)`]: {
                        flexDirection: "column",
                    },
                }}
            >
                <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
                    <Box sx={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
                        <Image
                            src={contactImg}
                            layout="fill"
                            objectFit="cover"
                            alt="contactImg"
                            style={{ borderRadius: '50%' }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: "0 16px" }}>
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
                </Grid>
            </Grid> */}
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
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
        </div >
    );
};

export default Contact;