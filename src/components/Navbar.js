import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import lightLogo from "../../public/assets/images/lightLogo.png";
import darkLogo from "../../public/assets/images/darkLogo.png";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import TemporaryDrawer from "../components/TemporaryDrawer";
import AtomicButton from "../atomicDesign/atoms/AtomicButton";
import Links from "../atomicDesign/molecules/Links";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { myMode, myPalette } = ChangeTheme();
  const { t, i18n } = useTranslation();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.brand;

  return (
    <nav className="navbar">
      <Container fixed className="container">
        <div className="logoBox">
          <Link href={"/"}>
            <Image
              className="logo"
              src={myMode == "light" ? lightLogo : darkLogo}
              alt="logo"
              width={110}
              height={60}
            />
          </Link>

          <Links />
        </div>

        <div className="callBox">
          <div className="call">
            <AddIcCallIcon
              className={`phone-icon ${i18n.language == "ar" && "right"}`}
            />
            <div className="text">
              <p>{t("Call us for Order ")}</p>
              <p>{data.mobile}</p>
            </div>
          </div>

          <AtomicButton
            content={"Order Online"}
            href={`${data.elmenus_url}`}
            bgColor={myPalette.background.mainColor}
            textColor={myPalette.text.light}
            shadowColor={myPalette.shadowColor.red}
          />
        </div>

        <TemporaryDrawer />
      </Container>
    </nav>
  );
};
export default Navbar;
