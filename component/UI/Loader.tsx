import { motion } from 'framer-motion'
import { makeStyles } from '@mui/styles';


interface LoaderProps {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 0.01 }
        }
    }
};

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
                delay: 3.2,
                duration: 0.3
            }}
            onAnimationComplete={definition => {
                setLoading(false)
            }}
            className={styles.container}
        >
            <div className={styles.content}>
                <motion.svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                >
                    <motion.rect
                        width="200"
                        height="100"
                        x="200"
                        y="200"
                        stroke="#ffffff"
                        strokeWidth="3"
                        fill="none"
                        variants={draw}
                        initial="hidden"
                        animate="visible"
                        rx="20"
                        ry="20"
                    />
                    <text x="260" y="260" fill="#ffffff" fontSize="32">Kim's</text>
                </motion.svg>
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