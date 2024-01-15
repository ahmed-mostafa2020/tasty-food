import { Container } from "@mui/material";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import { ChangeTheme } from "../context/ThemeContext";
import Testimonial from "../components/Testimonial";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";
import UpShapedBorder from "../atomicDesign/atoms/UpShapedBorder";

const Feedback = () => {
  const { myPalette } = ChangeTheme();

  return (
    <section
      className="feedback"
      style={{
        backgroundColor: `${myPalette.background.footer}`,
      }}
    >
      <DownShapedBorder fill={myPalette.background.default} />

      <Container className="container">
        <SectionTitle title={"Our Customer Feedbacks"} fontSize={"40px"} />

        <p>
          Magna sed sagittis non in mattis ultrices fermentum neque maecenas.
          Leo diam justo ac vel eleifend placerat volutpat.
        </p>

        <div className="testimonialBox">
          <Testimonial
            rating={""}
            opinion={
              "Tellus ultrices egestas justo duis. Leo sit quam ultrices turpis libero facilisis faucibus. Nulla elementum sed senectus nunc dolor augue. Blandit hac tempus id blandit urna libero."
            }
            name={"Paul K. Selden"}
            disc={"Dignissim"}
          />

          <Testimonial
            rating={""}
            opinion={
              "Tellus ultrices egestas justo duis. Leo sit quam ultrices turpis libero facilisis faucibus. Nulla elementum sed senectus nunc dolor augue. Blandit hac tempus id blandit urna libero."
            }
            name={"Paul K. Selden"}
            disc={"Dignissim"}
          />
        </div>
      </Container>

      <UpShapedBorder fill={myPalette.background.default} />
    </section>
  );
};

export default Feedback;
