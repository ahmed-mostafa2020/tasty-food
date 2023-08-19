import { ChangeTheme } from "@/src/context/ThemeContext";

const SectionTitle = () => {
  const { theme } = ChangeTheme();

  return <div className={`sectionTitle ${theme}`}>SectionTitle</div>;
};

export default SectionTitle;
