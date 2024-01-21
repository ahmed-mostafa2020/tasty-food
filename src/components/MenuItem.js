import { Container } from "@mui/material";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";

const MenuItem = ({ itemName, subItems }) => {
  return (
    <section className="menuItem">
      <Container className="container">
        <SectionTitle title={itemName} fontSize={"30px"} />

        <div className="subItemsContainer">
          {subItems.map((subItem, index) => (
            <div key={index} className="subItem">
              <div className="subItemBox">
                <h4>{subItem.name}</h4>
                <span>....</span>
                <h5>{subItem.price}</h5>
              </div>

              <p>{subItem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MenuItem;
