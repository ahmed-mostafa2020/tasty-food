import Image from "next/image";
import SectionCrown from "../atomicDesign/molecules/SectionCrown";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import { ChangeTheme } from "../context/ThemeContext";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import AtomicButton from "../atomicDesign/atoms/AtomicButton";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.about;
  const elmenus = homeEndPointData.data.brand.elmenus_url;

  AOS.init();

  return (
    <>
      <figure
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Image
          src={data.image}
          loader={() => `${data.image}`}
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
        <SectionCrown title={data.title} description={data.content} />

        <AtomicButton
          content={"Order Online"}
          href={`${elmenus}`}
          bgColor={myPalette.background.secColor}
          textColor={myPalette.text.dark}
          shadowColor={myPalette.shadowColor.yellow}
        />
      </div>
    </>
  );
};

export default About;
