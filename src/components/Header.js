import { Button, Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const Header = () => {
  const router = useRouter();
  const { myMode, setMyMode, myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const { i18n } = useTranslation();

  const handleTheme = () => {
    localStorage.setItem("currentMode", myMode === "light" ? "dark" : "light");
    setMyMode(myMode === "light" ? "dark" : "light");
  };

  return (
    <header
      className="header"
      style={{
        borderColor: `${myPalette.divider.primary}`,
      }}
    >
      <Container fixed className="container">
        <div className="work-date">
          <AccessTimeIcon />

          <p>{homeEndPointData && homeEndPointData.data.brand.working_hours}</p>
        </div>

        <div className="themes">
          {/* Lang */}
          {i18n.language === "en" ? (
            <Link href={router.pathname} locale="ar">
              <Button color="inherit">ar</Button>
            </Link>
          ) : (
            <Link href={router.pathname} locale="en">
              <Button color="inherit">en</Button>
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
      </Container>
    </header>
  );
};

export default Header;
