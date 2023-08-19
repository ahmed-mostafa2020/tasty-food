import "../styles/sass/_global.scss";
import ThemeProvider from "../src/context/ThemeContext";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
