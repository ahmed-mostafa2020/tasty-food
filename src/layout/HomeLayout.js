import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import i18n from "@/src/i18n";

const HomeLayout = ({ children }) => {
  const { myMode } = ChangeTheme();

  const themeLight = createTheme({
    palette: {
      background: {
        default: "#FFFFFF",
      },
      text: {
        primary: "#131313",
      },
    },
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#222222",
      },
      text: {
        primary: "#E7E8E8",
      },
    },
  });

  return (
    <ThemeProvider theme={myMode === "light" ? themeLight : themeDark}>
      <CssBaseline />
      <section
        className="homeLayout"
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <div className="topPartWrapper">
          <Header />
          <Navbar />
        </div>

        <section className="wrapper_home">{children}</section>

        <Footer />
        <CopyRights />
      </section>
    </ThemeProvider>
  );
};

export default HomeLayout;
