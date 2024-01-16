import { Container } from "@mui/material";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import FilterButtons from "../atomicDesign/molecules/FilterButtons";
import Product from "../components/Product";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const FilterGallery = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const allProducts = homeEndPointData.data.category;

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
          {allProducts.map((products) =>
            products.map((product) => (
              <Product
                key={product.index}
                // image={""}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default FilterGallery;
