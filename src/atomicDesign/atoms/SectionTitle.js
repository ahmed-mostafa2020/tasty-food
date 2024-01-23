const SectionTitle = ({ title, fontSize }) => {
  return (
    <h2
      className="sectionTitle"
      style={{
        fontSize: fontSize,
        textTransform: "capitalize",
        lineHeight: "50px",
      }}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
