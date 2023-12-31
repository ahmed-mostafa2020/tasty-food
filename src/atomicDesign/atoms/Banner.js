import { Container } from "@mui/material";
import { ChangeTheme } from "../../context/ThemeContext";

const Banner = ({ title, subTitle, text }) => {
  const { myPalette } = ChangeTheme();

  return (
    <section className="banner">
      <Container className="container" fixed>
        <h2>
          {title}{" "}
          <span style={{ color: `${myPalette.background.mainColor}` }}>
            {subTitle}
          </span>
        </h2>

        <p>{text}</p>
      </Container>
    </section>
  );
};

export default Banner;
