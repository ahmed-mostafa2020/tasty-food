import { ChangeTheme } from "@/src/context/ThemeContext";

const Header = () => {
  const { theme } = ChangeTheme();

  return <header className={`header ${theme}`}>Header</header>;
};

export default Header;
