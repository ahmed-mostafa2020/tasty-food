import "../styles/sass/_global.scss";
import DarkThemeProvider from "../src/context/ThemeContext";

const App = ({ Component, pageProps }) => {
  return (
    <DarkThemeProvider>
      <Component {...pageProps} />
    </DarkThemeProvider>
  );
};

export default App;
