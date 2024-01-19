import Link from "next/link";
import { ChangeTheme } from "../../context/ThemeContext";

const AtomicButton = ({ content, bgColor, borderColor, textColor, href }) => {
  const { myPalette } = ChangeTheme();

  const style = {
    padding: " 12px 30px",
    display: "flex",
    justifyContent: "center",
    width: "fit-content",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    borderRadius: "50px",
    backgroundColor: `${bgColor}`,
    color: textColor ? `${textColor}` : `${myPalette.text.primary}`,
  };

  return (
    <Link style={style} href={`${href}`}>
      {content}
    </Link>
  );
};

export default AtomicButton;
