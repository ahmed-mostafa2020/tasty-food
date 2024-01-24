const SectionCrown = ({ title, description }) => {
  return (
    <div className="sectionCrown">
      <h2>{title}</h2>

      {description && <article> {description} </article>}
    </div>
  );
};

export default SectionCrown;
