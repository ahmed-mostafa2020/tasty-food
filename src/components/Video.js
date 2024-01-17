import { Container } from "@mui/material";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import Link from "next/link";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import Image from "next/image";
import Polygon from "../../public/assets/images/Polygon 1.svg";

const Video = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.brand;
  {
    console.log(homeEndPointData.data.brand.elmenus_url);
  }
  return (
    <div className="video">
      <Container className="container">
        <Link href={`${data.elmenus_url}`}>
          <Image src={Polygon} alt="product" width={20} height={20} />
        </Link>

        <SectionTitle title={"Watch The Video"} fontSize={"25px"} />

        <article>
          Enim ut et amet vitae facilisi vel odio nisl. Pellentesque malesuada
          massa proin cursus elit amet iaculis.
        </article>
      </Container>
    </div>
  );
};

export default Video;
