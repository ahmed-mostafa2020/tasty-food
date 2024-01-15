import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import FilterButtons from "../atomicDesign/molecules/FilterButtons";
import Product from "../components/Product";

const FilterGallery = () => {
  return (
    <section className="filterGallery">
      <SectionTitle title={"Our Popular Tasty Foods"} fontSize={"35px"} />

      <article>
        Enim ut et amet vitae facilisi vel odio nisl. Pellentesque malesuada
        massa proin cursus elit amet iaculis.
      </article>

      <FilterButtons />

      <div className="productsBox">
        <Product />
      </div>
    </section>
  );
};

export default FilterGallery;
