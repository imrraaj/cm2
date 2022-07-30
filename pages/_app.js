import "../styles/globals.scss";

import { ContentProvider } from "../utils/ContentContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContentProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ContentProvider>
    </>
  );
}

export default MyApp;
