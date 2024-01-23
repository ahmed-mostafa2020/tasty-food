// import { ChangeTheme } from "../context/ThemeContext";

const TextFieldGroup = ({ type, label, name }) => {
  // const { myMode, myPalette } = ChangeTheme();

  return (
    <div className="textFieldGroup">
      <label> {label} </label>
      <input type={type} name={name} />
      <p>error</p>
    </div>
  );
};

export default TextFieldGroup;
