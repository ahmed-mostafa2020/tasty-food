import { Button } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const { myMode, setMyMode } = ChangeTheme();
  const { i18n } = useTranslation();

  const router = useRouter();

  // const handleLang = () => {
  //   i18n.language == "en"
  //     ? i18n.changeLanguage("ar")
  //     : i18n.changeLanguage("en");
  // };

  const handleTheme = () => {
    localStorage.setItem("currentMode", myMode === "light" ? "dark" : "light");
    setMyMode(myMode === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar">
      {/* Lang */}

      {i18n.language === "en" ? (
        <Link href={router.pathname} locale="ar">
          <Button>ar</Button>
        </Link>
      ) : (
        <Link href={router.pathname} locale="en">
          <Button>en</Button>
        </Link>
      )}

      {/* Theme */}
      <Button sx={{ ml: 1 }} onClick={handleTheme} color="inherit">
        {myMode === "dark" ? (
          <Brightness7 sx={{ color: "orange" }} />
        ) : (
          <Brightness4 />
        )}
      </Button>
    </div>
  );
};

export default Navbar;
