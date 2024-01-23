const TextareaGroup = ({ label, name }) => {
  return (
    <div className="textareaGroup">
      <label> {label} </label>
      <textarea
        name={name}
        rows="5"
        wrap="hard"
        spellcheck
        autocomplete
        style={{ borderRadius: "20px", resize: "none" }}
      />
      <p>error</p>
    </div>
  );
};

export default TextareaGroup;
