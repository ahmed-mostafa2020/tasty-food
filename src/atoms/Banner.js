import { Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";

const Banner = ({ title, subTitle }) => {
  const { myPalette } = ChangeTheme();

  const titleStyle = {
    fontFamily: "Carter One, cursive",
    fontSize: "46px",
    fontWeight: "400",
    lineHeight: "50px",
  };

  const subTitleStyle = {
    ...titleStyle,
    color: `${myPalette.background.mainColor}`,
  };

  return (
    <section className="banner" style={{ padding: "20px 0 100px" }}>
      <Container fixed style={{ textAlign: "center" }}>
        <h2 style={titleStyle}>
          {title} <span style={subTitleStyle}>{subTitle}</span>
        </h2>
      </Container>
    </section>
  );
};

export default Banner;
