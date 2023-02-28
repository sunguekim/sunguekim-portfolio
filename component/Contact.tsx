import React from 'react'
import Subtitle from './UI/Subtitle';
import { Box, Typography } from '@mui/material';
import { Email, Phone, GitHub } from '@mui/icons-material';

const Contact = () => {
    return (
        <div id='contact'>
            <Subtitle subtitle='Contact' />
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
        </div>
    )
}

export default Contact;