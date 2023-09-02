import Link from "next/link";
import { ChangeTheme } from "../context/ThemeContext";

const AtomicButton = ({ content, bgColor, borderColor, textColor, href }) => {
  const { myPalette } = ChangeTheme();

  const style = {
    padding: " 15px 30px",
    display: "flex",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "20px",
    border: "1px solid",
    borderRadius: "50px",
    backgroundColor: `${bgColor}`,
    borderColor: `${borderColor}`,
    color: textColor ? `${textColor}` : `${myPalette.text.primary}`,
  };

  return (
    <Link className="atomicButton" style={style} href={`${href}`}>
      {content}
    </Link>
  );
};

export default AtomicButton;
