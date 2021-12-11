import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Rubik's Cube Solver</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
