import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CircularProgress, CssBaseline } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const Layout = ({ children }) => {
  const { myMode, lightTheme, darkTheme, myPalette } = ChangeTheme();
  const { i18n } = useTranslation();
  const { homeEndPointData } = FetchingAllEndPointsData();

  return (
    <ThemeProvider theme={myMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {homeEndPointData && (
        <div className="layout" dir={i18n.language === "en" ? "ltr" : "rtl"}>
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
        </div>
      )}
    </ThemeProvider>
  );
};

export default Layout;
