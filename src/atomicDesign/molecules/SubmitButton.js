import { CircularProgress } from "@mui/material";
import { ChangeTheme } from "../../context/ThemeContext";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const SubmitButton = ({
  content,
  bgColor,
  shadowColor,
  textColor,
  isSubmitting,
  disableState,
}) => {
  const { myPalette } = ChangeTheme();
  const { t } = useTranslation();

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
      disabled={disableState}
    >
      {isSubmitting ? (
        <>
          {t("Forms.validation.sending")}

          <CircularProgress />
        </>
      ) : (
        content
      )}
    </button>
  );
};

export default SubmitButton;
