import Image from "next/image";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import { Container } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();

  const allOffers = homeEndPointData.data.offers;

  AOS.init();

  return (
    <section className="offers">
      <Container className="container">
        {allOffers.map((offer, index) => (
          <div
            key={index}
            className="offer"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <div className="text">
              <h2>{offer.title}</h2>
              <p className="description">{offer.description}</p>
              <h3>${offer.price}</h3>
            </div>

            <figure>
              {/* <Image
                src={offer.image ? `${offer.image}` : "/"}
                loader={() => `${loader}`}
                alt="discount"
                width={100}
                height={100}
              /> */}
            </figure>
          </div>
        ))}
      </Container>
    </section>
  );
};
export default Offers;
