import { ChangeTheme } from "@/src/context/ThemeContext";

const Footer = () => {
  const { theme } = ChangeTheme();

  return <footer className={`footer ${theme}`}>Footer</footer>;
};

export default Footer;
