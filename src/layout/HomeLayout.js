import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";

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
      <section className="homeLayout">
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
