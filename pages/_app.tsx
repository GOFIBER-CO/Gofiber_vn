import type { AppProps } from 'next/app';
import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/layouts';
import '../styles/webDesign/index.scss';
import { useEffect } from 'react';
import AOS from "aos";

import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 100,
      once: true
    });
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
