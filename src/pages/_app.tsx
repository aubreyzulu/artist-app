import '@/styles/globals.css';
import { CacheProvider } from '@emotion/react';

import type { AppProps } from 'next/app';
import { createEmotionCache } from '../../utils/create-emotion-cache';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/slices';

const clientSideEmotionCache = createEmotionCache();

export default function App(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </CacheProvider>
    </>
  );
}
