import Image from "next/image";
import SectionCrown from "../atomicDesign/molecules/SectionCrown";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import { ChangeTheme } from "../context/ThemeContext";
// import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import AtomicButton from "../atomicDesign/atoms/AtomicButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";
import { Container } from "@mui/material";

const AboutUs = ({ about, brand }) => {
  const { myPalette } = ChangeTheme();
  const { t } = useTranslation();
  // const { homeEndPointData } = FetchingAllEndPointsData();
  // const data = homeEndPointData.data.about;
  // const elmenus = homeEndPointData.data.brand.elmenus_url;

  AOS.init();

  return (
    <section className="aboutUs">
      <Container className="container">
        <figure
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <Image
            src={about.image}
            loader={() => `${about.image}`}
            alt="about"
            width={300}
            height={300}
          />

          <BaseImage width={450} height={350} />
        </figure>

        <div
          className="text"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-once="true"
        >
          <SectionCrown title={about.title} description={about.content} />

          <AtomicButton
            content={t("Buttons.order_online")}
            href={`${brand.elmenus_url}`}
            bgColor={myPalette.background.secColor}
            textColor={myPalette.text.dark}
            shadowColor={myPalette.shadowColor.yellow}
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
