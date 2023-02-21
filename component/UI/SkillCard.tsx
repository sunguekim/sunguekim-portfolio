import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { IExpList, IExprience } from '../../contexts/props';


const ExpCard: React.FC<IExprience> = ({title, src }) => {
    const theme = useTheme();
    return (
        <Grid item xs={12} md={3} >
            <Box
                component={Card}
                display='flex'
                flexDirection='column'
                alignItems='center'
                variant='outlined'
                width={1}
                height={1}
                borderRadius={2}
                boxShadow={0}
                data-aos='fade-up'
                data-aos-delay={100}
                data-aos-offset={100}
                data-aos-duration={600}
            >
                <CardContent
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        transition: 'all .2s ease-in-out',
                        '&:hover': {
                          transform: `translateY(-${theme.spacing(1)})`,
                        },
                      }}
                >
                    <Box marginBottom={1}>
                        <Box
                            component={CardMedia}
                            width={65}
                            height={65}
                            marginBottom={2}
                            bgcolor='transparent'
                            borderRadius={2}
                            image={src}
                        />
                    </Box>
                    <Typography
                        align='center'
                        color='rgb(103, 119, 136)'
                        fontWeight='bold'
                    >
                        {title}
                    </Typography>
                </CardContent>
            </Box>
        </Grid>
    )
}

export default ExpCard