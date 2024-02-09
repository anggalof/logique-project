import Head from "next/head";
import { Provider } from "react-redux";
import store from "../common/store";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LOGIQUE</title>
        <meta name="description" content="MUSIC LIST." />
        <meta name="author" content="@gagaalp" />
        <meta property="og:title" content="Logique" key="ogtitle" />+{" "}
        <meta property="og:description" content="Music List." key="ogdesc" />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/font-awesome/css/font-awesome.css"
        />
      </Head>
      <body>
        <Provider store={store}>
          {/* <Navigation /> */}
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Provider>
        <script type="text/javascript" src="/js/jquery.1.11.1.js"></script>
        <script type="text/javascript" src="/js/bootstrap.js"></script>
      </body>
    </>
  );
}
