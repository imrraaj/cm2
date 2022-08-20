import "../styles/globals.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MantineProvider } from "@mantine/styles";
import Router from "next/router";

import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MantineProvider
        theme={{
          primaryColor: "yellow",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  );
}

export default MyApp;
