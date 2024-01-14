import Offer from "../components/Offer";

const Offers = () => {
  return (
    <div className="offers">
      <Offer
        name={"Pasta"}
        discount={"20%"}
        order={"first order"}
        cost={"10.90"}
        image={""}
      />
      <Offer
        name={"Burger"}
        discount={"20%"}
        order={"first order"}
        cost={"12.90"}
        image={""}
      />
      <Offer
        name={"Combo"}
        discount={"20%"}
        order={"first order"}
        cost={"15.90"}
        image={""}
      />
    </div>
  );
};
export default Offers;
