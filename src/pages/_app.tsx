import '@/styles/globals.css';
import { CacheProvider } from '@emotion/react';

import type { AppProps } from 'next/app';
import { createEmotionCache } from '../../utils/create-emotion-cache';

const clientSideEmotionCache = createEmotionCache();

export default function App(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </>
  );
}
