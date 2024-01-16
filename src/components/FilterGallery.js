import { Container } from "@mui/material";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import FilterButtons from "../atomicDesign/molecules/FilterButtons";
import Product from "../components/Product";

const FilterGallery = () => {
  return (
    <section className="filterGallery">
      <Container>
        <SectionTitle title={"Our Popular Tasty Foods"} fontSize={"35px"} />

        <article>
          Enim ut et amet vitae facilisi vel odio nisl. Pellentesque malesuada
          massa proin cursus elit amet iaculis.
        </article>

        <FilterButtons />

        <div className="productsBox">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </Container>
    </section>
  );
};

export default FilterGallery;
