import { Field } from "formik";

const TextareaGroup = ({
  label,
  name,
  errors,
  touched,
  values,
  onChange,
  onBlur,
}) => {
  return (
    <div className="textareaGroup">
      <label> {label} </label>

      <Field
        as="textarea"
        className={errors && touched ? "textareaError" : ""}
        style={{ borderRadius: "20px", resize: "none" }}
        name={name}
        rows="5"
        wrap="hard"
        spellCheck="true"
        autoComplete="true"
        value={values}
        onChange={onChange}
        onBlur={onBlur}
      />

      {errors && touched ? <p>{errors}</p> : <p>{""}</p>}
    </div>
  );
};

export default TextareaGroup;
