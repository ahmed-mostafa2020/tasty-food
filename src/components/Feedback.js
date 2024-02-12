import { Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import Testimonial from "../components/Testimonial";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";
import UpShapedBorder from "../atomicDesign/atoms/UpShapedBorder";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../../public/assets/images/footerTexture.png";
import SectionCrown from "../atomicDesign/molecules/SectionCrown";
import { useTranslation } from "next-i18next";

const Feedback = ({ testimonials, background }) => {
  const { t } = useTranslation();
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
          <SectionCrown
            title={t("Feedback.title")}
            description={t("Feedback.description")}
          />
        </div>

        <div className="testimonialBox">
          {testimonials?.map((testimonial, index) => {
            if (testimonial.text.length > 0) {
              return (
                <Testimonial
                  key={index}
                  rating={testimonial.rate}
                  text={testimonial.text}
                />
              );
            }
          })}
        </div>
      </Container>

      {background && <UpShapedBorder fill={myPalette.background.default} />}
    </section>
  );
};

export default Feedback;
