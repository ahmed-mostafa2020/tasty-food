import "../styles/sass/_global.scss";
import DarkThemeProvider from "../src/context/ThemeContext";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  return (
    <DarkThemeProvider>
      <Component {...pageProps} />
    </DarkThemeProvider>
  );
};

export default appWithTranslation(App);
