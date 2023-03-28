import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { makeStyles, Typography } from '@mui/material'
import styles from '../styles/Home.module.css'


interface VisibleProps {
    onHide: () => void
}

const Main = ({onHide }: VisibleProps) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className={`${styles.main}`} >
                <div className={`${styles.wrapper}`}>
                    <Typography
                        variant='h4'
                    >
                        안녕하세요
                    </Typography>
                    <Typography
                        variant='h2'
                    >
                        프론트엔드 개발자
                    </Typography>
                    <Typography
                        variant='h3'
                    >
                        김선규입니다.
                    </Typography>
                    <div>
                        <button className={`${styles.btn}`} onClick={onHide}>
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default Main