import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../atoms/Banner";
import { ChangeTheme } from "../../context/ThemeContext";
import UpShapedBorder from "../atoms/UpShapedBorder";

const LayoutTopWrapper = ({ title, subTitle }) => {
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
        <Banner title={title} subTitle={subTitle} />
      </div>

      <UpShapedBorder fill={myPalette.background.default} />
    </>
  );
};

export default LayoutTopWrapper;
