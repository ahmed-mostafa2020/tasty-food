const TextFieldGroup = ({ type, label, name }) => {
  return (
    <div className="textFieldGroup">
      <label> {label} </label>
      <input type={type} name={name} style={{ borderRadius: "50px" }} />
      <p>error</p>
    </div>
  );
};

export default TextFieldGroup;
