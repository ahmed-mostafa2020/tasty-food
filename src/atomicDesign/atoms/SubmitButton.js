import { ChangeTheme } from "../../context/ThemeContext";
import { useState } from "react";

const SubmitButton = ({ content, bgColor, shadowColor, textColor }) => {
  const { myPalette } = ChangeTheme();

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const style = {
    boxShadow: isHover && `0 20px 30px ${shadowColor}`,
    backgroundColor: `${bgColor}`,
    color: textColor ? `${textColor}` : `${myPalette.text.primary}`,
  };

  return (
    <button
      className="submitButton"
      type="submit"
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};

export default SubmitButton;
