import { Container } from "@mui/material";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import { ChangeTheme } from "../context/ThemeContext";
import Testimonial from "../components/Testimonial";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";
import UpShapedBorder from "../atomicDesign/atoms/UpShapedBorder";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image } from "../../public/assets/images/footerTexture.png";

const Feedback = ({ background }) => {
  const { myPalette } = ChangeTheme();

  AOS.init();

  return (
    <section
      className={background ? `feedback` : `feedback withoutBackground`}
      style={{
        backgroundColor: background && `${myPalette.background.footer}`,
        backgroundImage: background && `url(${Image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {background && <DownShapedBorder fill={myPalette.background.default} />}

      <Container className="container">
        <div className="box" data-aos="fade-down" data-aos-once="true">
          <SectionTitle title={"Our Customer Feedbacks"} fontSize={"40px"} />

          <p>
            Magna sed sagittis non in mattis ultrices fermentum neque maecenas.
            Leo diam justo ac vel eleifend placerat volutpat.
          </p>
        </div>

        <div className="testimonialBox">
          <Testimonial
            rating={2}
            opinion={
              "Tellus ultrices egestas justo duis. Leo sit quam ultrices turpis libero facilisis faucibus. Nulla elementum sed senectus nunc dolor augue. Blandit hac tempus id blandit urna libero."
            }
            name={"Paul K. Selden"}
            disc={"Dignissim"}
          />

          <Testimonial
            rating={3}
            opinion={
              "Tellus ultrices egestas justo duis. Leo sit quam ultrices turpis libero facilisis faucibus. Nulla elementum sed senectus nunc dolor augue. Blandit hac tempus id blandit urna libero."
            }
            name={"Paul K. Selden"}
            disc={"Dignissim"}
          />
        </div>
      </Container>

      {background && <UpShapedBorder fill={myPalette.background.default} />}
    </section>
  );
};

export default Feedback;
