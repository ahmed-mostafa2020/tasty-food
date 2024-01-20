import Link from "next/link";
import { ChangeTheme } from "../../context/ThemeContext";
import { useState } from "react";

const AtomicButton = ({ content, bgColor, shadowColor, textColor, href }) => {
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
    <Link
      className="atomicButton"
      target="_blank"
      style={style}
      href={`${href}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </Link>
  );
};

export default AtomicButton;
