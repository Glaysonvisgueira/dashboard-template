import "../styles/font.css";
import GlobalStyle from "../styles/globalStyles";
import Layout from "../components/Layout";

import SettingsContext from "@/context/SettingsContext";

function MyApp({ Component, pageProps }) {
  return (
    <SettingsContext>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </SettingsContext>
  );
}

export default MyApp;
