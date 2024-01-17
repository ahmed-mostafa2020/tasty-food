import { useTranslation } from "next-i18next";
// import AtomicButton from "../atoms/AtomicButton";
import { Container } from "@mui/material";
import Image from "next/image";
import heroImage from "../../public/assets/images/Burger.png";
import underLine from "../../public/assets/images/underLine.svg";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const HeroSection = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.slider;

  return (
    <div className="heroSection">
      <Container fixed className="container">
        <div className="text">
          <h1>
            {data.title}
            <Image src={underLine} alt="underLine" />
          </h1>

          <article> {data.description}</article>

          {/* <div className="buttons">
            <AtomicButton
              content={"Order Now"}
              href={"/orders"}
              bgColor={myPalette.background.secColor}
              borderColor={myPalette.background.secColor}
              textColor={lightTheme.palette.text.primary}
            />
            <AtomicButton
              content={"Book a Table"}
              href={"/"}
              bgColor={"transparent"}
              borderColor={myPalette.border.primary}
            />
          </div> */}
        </div>

        <figure className="image">
          <Image
            src={heroImage}
            alt="heroImage"
            // loader={() => `${data.image}`}
            // src={data.image}
          />

          <BaseImage />
        </figure>
      </Container>
    </div>
  );
};

export default HeroSection;
