import { ChangeTheme } from "../context/ThemeContext";

const AtomicButton = ({ content, bgColor, borderColor, textColor }) => {
  const { myPalette } = ChangeTheme();

  const style = {
    border: "1px solid",
    borderRadius: "50px",
    padding: " 15px 30px",
    display: "flex",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "20px",
    backgroundColor: `${bgColor}`,
    borderColor: `${borderColor}`,
    color: textColor ? `${textColor}` : `${myPalette.text.primary}`,
  };

  return (
    <button className="atomicButton" style={style}>
      {content}
    </button>
  );
};

export default AtomicButton;
