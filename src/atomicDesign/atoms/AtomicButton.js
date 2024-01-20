import Link from "next/link";
import { ChangeTheme } from "../../context/ThemeContext";

const AtomicButton = ({ content, bgColor, shadowColor, textColor, href }) => {
  const { myPalette } = ChangeTheme();

  const style = {
    boxShadow: `0 20px 30px ${shadowColor}`,
    backgroundColor: `${bgColor}`,
    color: textColor ? `${textColor}` : `${myPalette.text.primary}`,
  };

  return (
    <Link className="atomicButton" style={style} href={`${href}`}>
      {content}
    </Link>
  );
};

export default AtomicButton;
