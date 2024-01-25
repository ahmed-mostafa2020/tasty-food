import { Container } from "@mui/material";
import Link from "next/link";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import Image from "next/image";
import Polygon from "../../public/assets/images/Polygon 1.svg";
import SectionCrown from "../atomicDesign/molecules/SectionCrown";
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.brand;

  AOS.init();

  return (
    <div className="video">
      <Container className="container">
        <Link
          href={`${data.elmenus_url}`}
          data-aos="fade-down"
          data-aos-once="true"
        >
          <Image src={Polygon} alt="product" width={20} height={20} />
        </Link>

        <div data-aos="fade-up" data-aos-once="true">
          <SectionCrown
            title={"Watch The Video"}
            description={`Enim ut et amet vitae facilisi vel odio nisl. Pellentesque malesuada
                massa proin cursus elit amet iaculis.`}
          />
        </div>
      </Container>
    </div>
  );
};

export default Video;
