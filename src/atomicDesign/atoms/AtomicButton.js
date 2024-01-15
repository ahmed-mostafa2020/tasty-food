import Link from "next/link";
import { ChangeTheme } from "../../context/ThemeContext";

const AtomicButton = ({ content, bgColor, borderColor, textColor, href }) => {
  const { myPalette } = ChangeTheme();

  const style = {
    padding: " 10px 20px",
    display: "flex",
    justifyContent: "center",
    width: "fit-content",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    border: "1px solid",
    borderRadius: "50px",
    backgroundColor: `${bgColor}`,
    borderColor: `${borderColor}`,
    color: textColor ? `${textColor}` : `${myPalette.text.primary}`,
  };

  return (
    <Link style={style} href={`${href}`}>
      {content}
    </Link>
  );
};

export default AtomicButton;
