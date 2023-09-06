import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { ChangeTheme } from "../../context/ThemeContext";
import Banner from "../atoms/Banner";

const FormTopWrapper = ({ children, title, subTitle }) => {
  const { myMode } = ChangeTheme();

  // if u want bg image in light mode just class myMode
  return (
    <>
      <div className={`formTopWrapper `}>
        <Header />
        <Navbar />
        <Banner title={title} subTitle={subTitle} />
        {children}
      </div>
    </>
  );
};

export default FormTopWrapper;
