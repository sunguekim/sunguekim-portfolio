import React, { Fragment } from 'react'
import Header from './Header/Header'
import { Container } from '@mui/material';
import MotionEffect from './UI/MotionEffect';

type LayoutProps = {
    children: React.ReactNode,
}

const Layout = (props: LayoutProps) => {
    return (
        <Fragment>
            <MotionEffect>
                <Header />
                    <div>{props.children}</div>
                <Container>
                </Container>
            </MotionEffect>
        </Fragment>
    )
}


export default Layout;