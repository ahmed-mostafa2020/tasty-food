import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { light } = ChangeTheme();

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
    <ThemeProvider theme={light === "light" ? themeLight : themeDark}>
      <CssBaseline />
      <section className="layout">
        <div className="topPartWrapper">
          <Header />
          <Navbar />
          <Banner />
        </div>

        <section className="wrapper_pages">{children}</section>
        <Footer />
        <CopyRights />
      </section>
    </ThemeProvider>
  );
};

export default Layout;
