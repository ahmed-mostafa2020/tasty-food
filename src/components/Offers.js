import Offer from "../components/Offer";
import offer1 from "../../public/assets/images/pasta 3.png";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const Offers = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();

  const allOffers = homeEndPointData.data.offers;

  return (
    <section className="offers">
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
    </section>
  );
};
export default Offers;
