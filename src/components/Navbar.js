import { Button } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import i18n from "../i18n";

const Navbar = () => {
  const { myMode, setMyMode } = ChangeTheme();

  const handleLang = () => {
    i18n.language == "en"
      ? i18n.changeLanguage("ar")
      : i18n.changeLanguage("en");
  };

  const handleTheme = () => {
    localStorage.setItem("currentMode", myMode === "light" ? "dark" : "light");
    setMyMode(myMode === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar">
      <h1>Hii, i am navbar</h1>

      {/* Lang */}

      {i18n.language === "en" ? (
        <Button onClick={handleLang}>ar</Button>
      ) : (
        <Button onClick={handleLang}>en</Button>
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
