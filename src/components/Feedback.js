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

        <article>
          Magna sed sagittis non in mattis ultrices fermentum neque maecenas.
          Leo diam justo ac vel eleifend placerat volutpat.
        </article>

        <div className="box">
          <Testimonial />
          <Testimonial />
        </div>
      </Container>

      <UpShapedBorder fill={myPalette.background.default} />
    </section>
  );
};

export default Feedback;
