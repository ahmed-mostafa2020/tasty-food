import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import UpShapedBorder from "../atomicDesign/atoms/UpShapedBorder";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";

const Layout = ({ children }) => {
  const { myMode, lightTheme, darkTheme, myPalette } = ChangeTheme();
  const { i18n } = useTranslation();

  return (
    <ThemeProvider theme={myMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <div className="layout" dir={i18n.language === "en" ? "ltr" : "rtl"}>
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
      </div>
    </ThemeProvider>
  );
};

export default Layout;
