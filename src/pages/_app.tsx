// Providers
import { ThemeProvider } from 'next-themes';

// Variables
import { Style } from '@master/css';

// Styles
import '@master/normal.css';
import '../styles/master.css';

// Types
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider themes={Style.colorSchemes} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
