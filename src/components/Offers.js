import Offer from "../components/Offer";
import offer1 from "../../public/assets/images/pasta 3.png";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import { Container } from "@mui/material";

const Offers = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();

  const allOffers = homeEndPointData.data.offers;

  return (
    <section className="offers">
      <Container className="container">
        {allOffers.map((offer, index) => (
          <Offer
            key={index}
            title={offer.title}
            description={offer.description}
            order={"first order"}
            price={offer.price}
            // image={offer.image}
          />
        ))}
      </Container>
    </section>
  );
};
export default Offers;
