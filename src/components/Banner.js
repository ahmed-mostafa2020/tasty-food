import { ChangeTheme } from "@/src/context/ThemeContext";

const Banner = () => {
  const { theme } = ChangeTheme();

  return <div className={`banner ${theme}`}>Banner</div>;
};

export default Banner;
