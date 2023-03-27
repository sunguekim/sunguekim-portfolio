import React from 'react'
import Link from "next/link"
import { makeStyles, Typography } from '@mui/material'
import styles from '../styles/Home.module.css'
const Main = () => {
    return (
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
                    <Link href="/#about" download={true}>
                        <button className={`${styles.btn}`}>
                            Get In Touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Main