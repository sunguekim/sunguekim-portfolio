import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Fade } from 'react-awesome-reveal'
import SkillCard from './UI/SkillCard';
import Subtitle from './UI/Subtitle';
import { IExprience } from '../contexts/props';
import { exprience } from '../contexts/data/skillData'

const Experience: React.FC = () => {
    return (
       
            <div id='experience'>
                <Subtitle subtitle='Experience' />
                 <Fade direction='up' triggerOnce={true}>
                <Box
                    maxWidth={{ sm: 720, md: 1236 }}
                    width={1}
                    margin='0 auto'
                    paddingX={2}
                    paddingY={4}
                >
                    <Grid container spacing={2}>
                        {exprience && exprience.map((data: IExprience) => (
                            <SkillCard key={data.id} {...data} />
                        ))}
                    </Grid>
                </Box>
                </Fade>
            </div >     
    )
}

export default Experience;