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
          colors: {
            "primary-yellow": "#c6a62d",
            brand: [
              "#C6A62D",
              "#BC9E2B",
              "#B29529",
              "#A88D26",
              "#9E8524",
              "#957D22",
              "#8B741F",
              "#816C1D",
              "#77641B",
            ],
          },
          // fontFamily: 'DM Sans, sans-serif',
          fontFamily: 'DM Sans, sans-serif',
          headings: {
            fontFamily: "Fira Sans",
          }
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
