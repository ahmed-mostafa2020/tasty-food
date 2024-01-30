import Image from "next/image";
import { Container } from "@mui/material";
import delivery from "../../public/assets/images/Image.png";
// import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import { ChangeTheme } from "../context/ThemeContext";
import SectionCrown from "../atomicDesign/molecules/SectionCrown";
import AOS from "aos";
import "aos/dist/aos.css";

const Delivery = ({ allData }) => {
  const { myMode } = ChangeTheme();
  // const { homeEndPointData } = FetchingAllEndPointsData();
  // const firstData = homeEndPointData.data.page3;
  // const secondData = homeEndPointData.data.page4;

  AOS.init();

  return (
    <>
      <section className={`delivery ${myMode}`}>
        <Container className="container">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
          >
            <SectionCrown
              title={allData.page3.title}
              description={allData.page3.content}
            />
          </div>

          <figure
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
          >
            <Image src={delivery} alt="delivery" width={300} height={300} />
          </figure>

          <div data-aos="fade-left" data-aos-once="true">
            <SectionCrown
              title={allData.page4.title}
              description={allData.page4.content}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Delivery;
