import { Container } from "@mui/material";
import About from "../components/About";

const AboutUs = ({ container }) => {
  return (
    <section className="aboutUs">
      {container ? (
        <Container className="container">
          <About />
        </Container>
      ) : (
        <About />
      )}
    </section>
  );
};

export default AboutUs;
