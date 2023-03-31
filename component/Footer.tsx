import React from 'react'
import Link from 'next/link'
import { Links } from './Header/Header'
import styles from '../styles/Footer.module.css'
import Subtitle from './UI/Subtitle'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system'
import { Divider, Typography } from '@mui/material'


const Footer: React.FC = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <Container>
            <Grid container spacing={3} sx={{ marginTop: "40px" }}>
                <Grid item xs={6} className={`${styles.footer_top}`}>
                    <div className={styles.footer_menu}>
                        {Links.map((item, index) => (
                            <Link href={item.path} key={index}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={6} className={`${styles.footer_top}`}>
                    <div className={`${styles.footer_creator}`}>
                        <h4>
                            Created by SungueKim
                        </h4>
                    </div>
                </Grid>
                <Divider />
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", }}>
                    &copy; Copyright {year} - Developed by Sungue Kim. All right
                    reserved.{" "}
                </Grid>
            </Grid>
        </Container>
    );
};


export default Footer;