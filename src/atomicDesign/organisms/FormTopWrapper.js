import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../molecules/Banner";

const FormTopWrapper = ({ children, title, subTitle, text }) => {
  // if u want bg image in light mode just class myMode
  return (
    <>
      <div className={`formTopWrapper `}>
        <Header />
        <Navbar />
        <Banner title={title} subTitle={subTitle} text={text} />
        {children}
      </div>
    </>
  );
};

export default FormTopWrapper;
