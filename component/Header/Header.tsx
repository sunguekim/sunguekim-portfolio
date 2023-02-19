import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import { Divider } from '@mui/material';
import { getThemeProps, makeStyles, useTheme, styled } from '@mui/styles';
import MaterialSwitch from './Switch';
import { HeaderDrawer } from './Drawer';
import styles from "../../styles/Header.module.css"
import { Container } from '@mui/material';


export interface ILinks {
    id: number,
    name: string,
    path: string
}


export const Links: ILinks[] = [
    {
        id: 1,
        name: "Home",
        path: "/",
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
    {
        id: 5,
        name: "Contact",
        path: "#contact",
    },
];


const HeaderDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}))

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (headerRef.current) {
            const headerHeight = headerRef.current.getBoundingClientRect().height;
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > headerHeight) {
                headerRef.current.classList.add(`${styles.header__shrink}`);
            } else {
                headerRef.current.classList.remove(`${styles.header__shrink}`);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderDiv className={`${styles.header} `} ref={headerRef}>
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
                            <Divider orientation="vertical" flexItem sx={{ height: 60, borderRightWidth: 2 }} />
                            <div className={`${styles.nav__right}`}>
                                <MaterialSwitch />
                            </div>
                        </div>
                    </div>
                    {/* ========= nav_drawer =========== */}
                    <span className={`${styles.mobile__menu}`}>
                        <HeaderDrawer />
                    </span>
                </div>
            </Container>
        </HeaderDiv>
    )
}

export default Header;