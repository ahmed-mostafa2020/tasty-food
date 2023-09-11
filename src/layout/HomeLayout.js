import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CopyRights from "../components/CopyRights";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import UpShapedBorder from "../atomicDesign/atoms/UpShapedBorder";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";
// import Image from "next/image";
// import corrTopBorder from "../../public/assets/images/corrTopBorder.svg";

const HomeLayout = ({ children }) => {
  const { myMode, lightTheme, darkTheme, myPalette } = ChangeTheme();
  const { i18n } = useTranslation();

  return (
    <ThemeProvider theme={myMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <section
        className="homeLayout"
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <div className="topWrapper">
          <Header />
          <Navbar />
          <HeroSection />
        </div>

        <UpShapedBorder />

        {children}

        <div
          className="bottomWrapper"
          style={{
            backgroundColor: `${myPalette.background.footer}`,
          }}
        >
          <DownShapedBorder />

          <Footer />
          <CopyRights />
        </div>
      </section>
    </ThemeProvider>
  );
};

export default HomeLayout;
