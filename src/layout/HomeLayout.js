import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CopyRights from "../components/CopyRights";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import UpShapedBorder from "../atomicDesign/atoms/UpShapedBorder";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
// import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import loadingImage from "../../public/assets/images/output-onlinegiftools.gif";

const HomeLayout = ({ children }) => {
  const { myMode, lightTheme, darkTheme, myPalette } = ChangeTheme();
  const { i18n } = useTranslation();
  const { homeEndPointData } = FetchingAllEndPointsData();

  return (
    <ThemeProvider theme={myMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      {homeEndPointData ? (
        <section
          className="homeLayout"
          dir={i18n.language === "en" ? "ltr" : "rtl"}
        >
          <div className="topWrapper">
            <Header />
            <Navbar />
            <HeroSection />
          </div>

          <UpShapedBorder fill={myPalette.background.shaped_border} />

          {children}

          <div
            className="bottomWrapper"
            style={{
              backgroundColor: `${myPalette.background.footer}`,
            }}
          >
            <DownShapedBorder fill={myPalette.background.default} />

            <Footer />
            <CopyRights />
          </div>
        </section>
      ) : (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <CircularProgress /> */}

          <Image src={loadingImage} alt="loading" width={300} height={300} />
        </Box>
      )}
    </ThemeProvider>
  );
};

export default HomeLayout;
