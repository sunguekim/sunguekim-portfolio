import React from 'react'
import styles from '../../styles/Card.module.css'
import Subtitle from './Subtitle';
import Image from 'next/image';

interface ICard {
    id: number,
    title: string,
    src: string
}

const ExpCard = ({id,title,src}:ICard) => {
    

    return (
        <div className={`${styles.container}`}>
           
        </div>
    )
}

export default ExpCard;