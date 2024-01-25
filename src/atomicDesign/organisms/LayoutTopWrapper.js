import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../molecules/Banner";
import { ChangeTheme } from "../../context/ThemeContext";
import UpShapedBorder from "../atoms/UpShapedBorder";

const LayoutTopWrapper = ({ title }) => {
  const { myPalette } = ChangeTheme();

  return (
    <>
      <div
        className="layoutTopWrapper"
        style={{
          backgroundColor: `${myPalette.background.footer}`,
        }}
      >
        <Header />
        <Navbar />
        {title && <Banner title={title} />}
      </div>

      <UpShapedBorder fill={myPalette.background.default} />
    </>
  );
};

export default LayoutTopWrapper;
