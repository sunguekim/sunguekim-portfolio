import React, { useEffect, useRef, useState } from 'react'
import throttle from 'lodash/throttle';
import Link from 'next/link';
import { Divider } from '@mui/material';
import { styled } from '@mui/styles';
import { Container } from '@mui/material';
import MaterialSwitch from './Switch';
import { HeaderDrawer } from './Drawer';
import styles from "../../styles/Header.module.css"


export interface ILinks {
    id: number,
    name: string,
    path: string
}


export const Links: ILinks[] = [
    {
        id: 1,
        name: "Home",
        path: "",
    },
    {
        id: 2,
        name: "About",
        path: "#about",
    },
    {
        id: 3,
        name: "Experience",
        path: "#experience",
    },
    {
        id: 4,
        name: "Project",
        path: "#project",
    },
];


const Header: React.FC = () => {

    const [scrollFlag, setScrollFlag] = useState(false);
    const [boxShadow, setBoxShadow] = useState("none");

    const HeaderDiv = styled('div')(({ theme }) => ({
        backgroundColor: scrollFlag ? theme.palette.background.default : "",
        boxShadow: boxShadow,
        position: "sticky",
        alignItems: "center",
        zIndex: 1,
    }));

    const updateScroll = throttle(() => {
        const scrollPos = window.scrollY;
        const alpha = scrollPos < window.innerHeight * 1.1
            ? 0
            : (scrollPos - window.innerHeight * 1.1) / (window.innerHeight * 0.3);
        const boxShadow = `5px 5px 15px -5px rgba(1, 210, 147, ${alpha})`;
        setBoxShadow(boxShadow);
        setScrollFlag(scrollPos > window.innerHeight * 1.1);
    }, 100);

    useEffect(() => {
        updateScroll();
        window.addEventListener('scroll', updateScroll);
        return () => {
            window.removeEventListener('scroll', updateScroll);
        };
    }, []);

    return (
        <HeaderDiv className={`${styles.header} `}>
            <Container>
                <div className={`${styles.nav__wrapper}`}>
                    <div className={`${styles.logo}`}>
                        <h1>
                            KiM'<span>S</span>
                        </h1>
                    </div>
                    {/*============ 메뉴 ======== */}
                    <div className={`${styles.navigation}`}>
                        <div className={`${styles.nav__menu}`}>
                            {Links.map(({ name, path, id }: ILinks) => {
                                return <Link key={id} href={`/${path}`}>{name}</Link>
                            })}
                            <Divider orientation="vertical" flexItem sx={{ height: 60, borderRightWidth: 2, marginRight: 0 }} />
                            <div className={`${styles.nav__right}`}>
                                <MaterialSwitch />
                            </div>
                        </div>
                    </div>
                    {/* ========= 반응형 drawer =========== */}
                    <span className={`${styles.mobile__menu}`}>
                        <HeaderDrawer />
                    </span>
                </div>
            </Container>
        </HeaderDiv>
    )
}

export default Header;