import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/common/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/' && <Header />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;