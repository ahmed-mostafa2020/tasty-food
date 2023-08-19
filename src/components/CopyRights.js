import { ChangeTheme } from "@/src/context/ThemeContext";

const CopyRights = () => {
  const { theme } = ChangeTheme();

  return <div className={`copyRights ${theme}`}>CopyRights</div>;
};

export default CopyRights;
