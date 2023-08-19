import { ChangeTheme } from "@/src/context/ThemeContext";

const Navbar = () => {
  const { theme } = ChangeTheme();

  return <div className={`navbar ${theme}`}>Navbar</div>;
};

export default Navbar;
