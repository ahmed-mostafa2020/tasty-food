// import { ChangeTheme } from "../context/ThemeContext";

// working on it

const AtomicInput = ({ type, label }) => {
  // const { myMode, myPalette } = ChangeTheme();

  const style = {};

  return (
    <div className="atomicInput">
      <label> {label} </label>
      <input type={type} style={style} />
    </div>
  );
};

export default AtomicInput;
