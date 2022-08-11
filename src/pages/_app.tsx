import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { SessionProvider } from 'next-auth/react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';

const MyApp: AppType = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <NavBar />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
