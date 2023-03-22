import { motion } from 'framer-motion'
import { makeStyles } from '@mui/styles';


interface LoaderProps {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Loader = ({ setLoading }: LoaderProps) => {
    const styles = useStyles();
    return (
        <motion.div
            initial={{
                y: 0
            }}
            animate={{
                y: "-100vh"
            }}
            transition={{
                delay: 4.2,
                duration: 0.3
            }}
            onAnimationComplete={definition => {
                setLoading(false)
            }}
            className={styles.container}
        >
            <div className={styles.content}>
                <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#fff"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    pathLength={1}
                    opacity={1}
                    transition={{
                        pathLength: { delay: 4.0, type: "spring", duration: 1.5, bounce: 0 },
                        opacity: { delay: 4.0, duration: 0.01 }
                    }}
                >
                    Kim'S
                </motion.circle>
            </div>
        </motion.div>
    )
}

export default Loader

const useStyles = makeStyles({
    container: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#16d39a',
        zIndex: 10000,
    },
    content: {
        margin: "0 auto",
    }
})