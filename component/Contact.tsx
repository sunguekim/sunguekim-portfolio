import React from 'react'
import Grid from '@mui/material/Grid';
import Subtitle from './UI/Subtitle';
import Image from "next/image";
import { Box, Typography } from '@mui/material';
import { Email, Phone, GitHub } from '@mui/icons-material';
import contactImg from '../public/assets/contact.png';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <div id='contact' className={`${styles.contact}`}>
            <Subtitle subtitle='Contact Me' />
            <Grid
                marginTop={3}
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
                <Grid
                    item
                    xs={3}
                >
                    <Image
                        src={contactImg}
                        width="400"
                        height="400"
                        alt="contactImg"
                        style={{ borderRadius: '50%' }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Email sx={{ mr: 1 }} />
                            <Typography variant="body1">sunguekim96@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography variant="body1">010-5119-9710</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <GitHub sx={{ mr: 1 }} />
                            <Typography variant="body1"><a href="https://github.com/your-github-username">https://github.com/your-github-username</a></Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}

export default Contact;