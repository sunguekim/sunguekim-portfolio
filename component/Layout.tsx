import React, { Fragment } from 'react'
import Header from './Header/Header'
import { Container, Divider } from '@mui/material';
import MotionEffect from './UI/MotionEffect';
import Footer from './Footer';

type LayoutProps = {
    children: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <Fragment>
            <MotionEffect>
                <Header />
                <Container>
                    <div>{props.children}</div>
                </Container>
                <Divider/>
                <Footer />
            </MotionEffect>
        </Fragment>
    )
}


export default Layout;