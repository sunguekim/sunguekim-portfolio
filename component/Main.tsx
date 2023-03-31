import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { styled } from '@mui/material/styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const StyledArrowDownwardIcon = styled(ArrowDownwardIcon)(({ theme }) => ({
    fontSize: 40,
}));

const Main: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className={`${styles.main}`} >
                <div className={`${styles.wrapper}`}>
                    <Typography
                        fontFamily=''
                        variant='h4'
                        sx={{ alignItems: "center" }}
                    >
                        안녕하세요
                        <motion.div
                            style={{ display: "inline-block" }}
                            animate={{ rotate: [50, 90, 50] }}
                            transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                        >
                            👋
                        </motion.div>
                    </Typography>
                    <h2>
                        <TypeAnimation
                            sequence={[
                                '프론트엔드 개발자',
                                1000,
                                '개발이 즐거운',
                                1000,
                            ]}
                            repeat={Infinity}
                        />
                    </h2>
                    <Typography
                        variant='h3'
                    >
                        김선규입니다
                    </Typography>
                    <div>
                        <Link href='/#about'>
                            <button className={`${styles.btn}`}>
                                Get In Touch
                            </button>
                        </Link>
                    </div>
                    <div className={`${styles.arrow_wrapper}`}>
                        <StyledArrowDownwardIcon />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default Main