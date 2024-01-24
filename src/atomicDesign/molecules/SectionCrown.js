import SectionTitle from "../atoms/SectionTitle";

const SectionCrown = ({ title, description }) => {
  return (
    <div className="sectionCrown">
      <SectionTitle title={title} />

      <article> {description} </article>
    </div>
  );
};

export default SectionCrown;
