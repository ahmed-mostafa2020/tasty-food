const SectionTitle = ({ title, fontSize }) => {
  return (
    <h2 className="sectionTitle" style={{ fontSize: fontSize }}>
      {title}
    </h2>
  );
};

export default SectionTitle;
