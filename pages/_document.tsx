import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        property="og:description"
                        content="프론트엔드 개발자 김선규 포트폴리오 입니다."
                    />
                    <meta
                        property="og:image"
                        content="/images/profile.jpg"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {

    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
        })

    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
}