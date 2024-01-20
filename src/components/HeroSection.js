import { Container } from "@mui/material";
import Image from "next/image";
import heroImage from "../../public/assets/images/Burger.png";
import underLine from "../../public/assets/images/underLine.svg";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import AtomicButton from "../atomicDesign/atoms/AtomicButton";
import { ChangeTheme } from "../context/ThemeContext";

const HeroSection = () => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.slider;
  const elmenus = homeEndPointData.data.brand.elmenus_url;

  return (
    <div className="heroSection">
      <Container fixed className="container">
        <div className="text">
          <div>
            <h1>
              {data.title}
              <Image src={underLine} alt="underLine" />
            </h1>

            <article> {data.description}</article>
          </div>

          <AtomicButton
            content={"Order Online"}
            href={`${elmenus}`}
            bgColor={myPalette.background.secColor}
            textColor={myPalette.text.dark}
            shadowColor={myPalette.shadowColor.yellow}
          />
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
