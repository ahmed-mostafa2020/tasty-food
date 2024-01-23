const TextFieldGroup = ({
  type,
  label,
  name,
  errors,
  touched,
  values,
  onChange,
  onBlur,
}) => {
  return (
    <div className="textFieldGroup">
      <label> {label} </label>
      <input
        className={errors && touched ? "inputError" : ""}
        style={{ borderRadius: "50px" }}
        type={type}
        name={name}
        value={values}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && touched && <p>{errors}</p>}
    </div>
  );
};

export default TextFieldGroup;
