import type { AppProps } from 'next/app';
import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/layouts';
import '../styles/webDesign/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
