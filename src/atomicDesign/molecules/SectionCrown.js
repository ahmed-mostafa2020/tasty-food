const SectionCrown = ({ title, description }) => {
  return (
    <div className="sectionCrown">
      <h2>{title}</h2>

      {description && <p> {description} </p>}
    </div>
  );
};

export default SectionCrown;
