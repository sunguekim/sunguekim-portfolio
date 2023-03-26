import React from 'react'
import Link from "next/link"
import { Typography } from '@mui/material'
import styles from '../styles/Home.module.css'
const Main = () => {
    return (
        <div className={`${styles.main}`}>
            <Typography
                variant='h5'
            >
                안녕하세요
            </Typography>
            <h2>
                프론트엔드 개발자
            </h2>
            <h3>
                김선규입니다.
            </h3>
            <div>
                <Link href="/resume.pdf" download={true}>
                    <button className={`${styles.btn}`}>
                        이력서
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Main