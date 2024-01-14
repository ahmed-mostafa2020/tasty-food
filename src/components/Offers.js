import Offer from "../components/Offer";
import offer1 from "../../public/assets/images/pasta 3.png";
import offer2 from "../../public/assets/images/B-2 S.png";
import offer3 from "../../public/assets/images/Combo 2.png";

const Offers = () => {
  return (
    <div className="offers">
      <Offer
        name={"Pasta"}
        discount={"20%"}
        order={"first order"}
        cost={"10.90"}
        image={offer1}
      />
      <Offer
        name={"Burger"}
        discount={"20%"}
        order={"first order"}
        cost={"12.90"}
        image={offer2}
      />
      <Offer
        name={"Combo"}
        discount={"20%"}
        order={"first order"}
        cost={"15.90"}
        image={offer3}
      />
    </div>
  );
};
export default Offers;
