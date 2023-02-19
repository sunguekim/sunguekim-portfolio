import React, { Fragment } from 'react'
import Header from './Header/Header'
import { Container } from '@mui/material';

type LayoutProps = {
    children: React.ReactNode,
}

const Layout = (props: LayoutProps) => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div>{props.children}</div>
            </Container>
        </Fragment>
    )
}


export default Layout;