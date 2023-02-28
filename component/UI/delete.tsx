import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import { IEducation } from '../../contexts/props';
import { Slide } from "react-awesome-reveal";
import '../../styles/Education.module.css'

const EductionCard: React.FC<IEducation> = ({ id, course, startYear, endYear, detail }) => {

    const useStyles = makeStyles(() => ({
        educationCard: {
            backgroundColor: grey[50],
            "&:hover": {
                backgroundColor: grey[100],
            },
        }
    }))

    const classes = useStyles();

    return (
        <Slide>
            <div key={id} className={`education__card ${classes.educationCard}`}>
                <div className='education__img'>

                </div>
                <div className='education__details'>
                    <h6>{startYear}-{endYear}</h6>
                    <h4>{course}</h4>
                    <h5>{detail}</h5>
                </div>
            </div>
        </Slide>
    )
}

export default EductionCard