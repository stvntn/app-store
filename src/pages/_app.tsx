import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
//MUI
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
//MUI CONFIG
import theme from '../mui-config/theme';
import createEmotionCache from '../mui-config/createEmotionCache';
//CSS
import '../styles/normalize.css';
import '../styles/globals.css';

type AppComponentProps = {
  Component: React.FC, 
  emotionCache?: any, 
  pageProps: any 
};

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component,  emotionCache = clientSideEmotionCache, pageProps }:AppComponentProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;