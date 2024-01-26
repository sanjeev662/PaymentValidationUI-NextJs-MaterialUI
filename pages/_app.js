import "@/styles/globals.css";
import Head from 'next/head';
import 'h8k-components';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="shortcut icon"
          href="https://cdn.jsdelivr.net/npm/h8k-design@latest/dist/assets/favicon.ico"
        />
        <title>Payment Validation App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
