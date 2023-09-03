import { ChangeTheme } from "../context/ThemeContext";

const AtomicInput = ({ type, label }) => {
  const { myMode, myPalette } = ChangeTheme();

  const style = {};

  return (
    <div>
      <label> {label} </label>
      <input type={type} style={style} />
    </div>
  );
};

export default AtomicInput;
