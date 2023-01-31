import type { AppProps } from 'next/app';
import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/layouts';
import '../styles/webDesign/index.scss';
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect } from 'react';
import AOS from "aos";
import { Provider } from 'react-redux';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react'

import "aos/dist/aos.css";
import { env } from '@/src/utils';
import Head from 'next/head';
import { store } from '@/src/redux';
import { SkeletonTheme } from 'react-loading-skeleton';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 100,
      once: true
    });
  }, []);

  return (
    <Provider store={store}>
      <SkeletonTheme baseColor={"#ebfbff"} highlightColor={"#96eaff"}>

        <FpjsProvider
          loadOptions={{
            apiKey: env.FP_PUBLIC_API_KEY || '',
          }}
        >
          <Head>
            <title>Gofiber Hosting và Máy chủ hiệu năng cao - Gofiber.vn - Giới thiệu sản phẩm</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FpjsProvider>
      </SkeletonTheme>
    </Provider>

  );
}
