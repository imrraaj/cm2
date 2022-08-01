import "../styles/globals.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MantineProvider } from "@mantine/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MantineProvider
        theme={{
          primaryColor:"green"
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
