import React from 'react'
import styles from '../../styles/Subtitle.module.css'

interface ISubtitle {
    subtitle: string
}

const Subtitle = ({ subtitle }: ISubtitle) => {
    return <h5 className={`${styles.subtitle}`}>{subtitle}</h5>
}

export default Subtitle