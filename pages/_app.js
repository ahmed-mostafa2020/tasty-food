import "../styles/sass/_global.scss";
import DarkThemeProvider from "../src/context/ThemeContext";
import DataContextProvider from "../src/context/FetchingDataContext";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  return (
    <DarkThemeProvider>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </DarkThemeProvider>
  );
};

export default appWithTranslation(App);
