import React, { useEffect, useState, useMemo } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline, createTheme, PaletteMode, useMediaQuery } from '@mui/material';
import ColorContext from '../contexts/colorContext'
import Layout from '../component/Layout';
import GetDesignTokens from '../styles/theme';


interface MyAppProps extends AppProps {
  themeSetting: PaletteMode;
}


const MyApp = ({ Component, pageProps, themeSetting }: MyAppProps) => {

  const [mode, setMode] = useState<PaletteMode>(
    themeSetting || 'light'
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );


  const theme = useMemo(() => createTheme(GetDesignTokens(mode)), [mode]);


  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, []);


  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ColorContext.Provider>

  )
}

export default MyApp
