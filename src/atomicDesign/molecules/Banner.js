import { Container } from "@mui/material";

const Banner = ({ title }) => {
  return (
    <section className="banner">
      <Container className="container" fixed>
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default Banner;
