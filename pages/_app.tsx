import React, { useEffect, useState, useMemo, Fragment } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline, createTheme, PaletteMode, useMediaQuery } from '@mui/material';
import ColorContext from '../contexts/colorContext'
import Layout from '../component/Layout';
import GetDesignTokens from '../styles/theme';
import { AnimatePresence, motion } from 'framer-motion'
import "../styles/globals.css";
import Loader from '../component/UI/Loader';
import MotionEffect from '../component/UI/MotionEffect';


interface MyAppProps extends AppProps {
  themeSetting: PaletteMode;
}

const MyApp = ({ Component, pageProps, themeSetting, router }: MyAppProps) => {

  const [mode, setMode] = useState<PaletteMode>(
    themeSetting || 'light'
  );

  const [isLoading, setLoading] = useState(true);

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


  const theme = useMemo(() => createTheme(GetDesignTokens(mode), {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1280,
        xl: 1920,
      },
    },
  }), [mode]);


  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, []);


  return (
    <Fragment>
      {
        isLoading ?
          (
            <Loader setLoading={setLoading} />
          ) : (
            <ColorContext.Provider value={colorMode} >
              <ThemeProvider theme={theme}>
                <CssBaseline />
                  <AnimatePresence mode='wait' initial={false} >
                    <MotionEffect>
                      <Component {...pageProps} />
                    </MotionEffect>
                  </AnimatePresence>
              </ThemeProvider>
            </ColorContext.Provider>
          )
      }
    </Fragment>
  )
}

export default MyApp
