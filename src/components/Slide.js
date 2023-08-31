import { useTranslation } from "next-i18next";
import AtomicButton from "../atoms/AtomicButton";
import { Container } from "@mui/material";
import Image from "next/image";
import imageBase from "../../public/assets/images/Burger-base.png";
import underLine from "../../public/assets/images/underLine.svg";

const Slide = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="slide">
      <Container className="container">
        <div className="text">
          <h1>
            Welcome To <br /> Our Tasty{" "}
            <span>
              Foods <Image src={underLine} alt="underLine" />
            </span>
          </h1>

          <p> {t("Welcome")}</p>

          <div className="buttons">
            <AtomicButton content={"Order Now"} />
            <AtomicButton content={"Book a Table"} />
          </div>
        </div>

        <div className="image">
          <Image src={imageBase} alt="imageBase" />
        </div>
      </Container>
    </div>
  );
};

export default Slide;
