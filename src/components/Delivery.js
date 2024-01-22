import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import { Container } from "@mui/material";
import delivery from "../../public/assets/images/Image.png";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import { ChangeTheme } from "../context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Delivery = () => {
  const { myMode } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const firstData = homeEndPointData.data.page3;
  const secondData = homeEndPointData.data.page4;

  AOS.init();

  return (
    <>
      <section className={`delivery ${myMode}`}>
        <Container className="container">
          <div data-aos="fade-right" data-aos-easing="ease-in-sine">
            <SectionTitle title={firstData.title} fontSize={"30px"} />
            <article>{firstData.content}</article>
          </div>

          <figure data-aos="fade-right" data-aos-easing="ease-in-sine">
            <Image src={delivery} alt="delivery" width={300} height={300} />
          </figure>

          <div data-aos="fade-left">
            <SectionTitle title={secondData.title} fontSize={"30px"} />
            <article>{secondData.content}</article>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Delivery;
