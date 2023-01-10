import type { AppProps } from 'next/app';
import '../styles/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../src/layouts';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
