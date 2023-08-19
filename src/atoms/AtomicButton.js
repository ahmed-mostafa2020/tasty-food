import { ChangeTheme } from "@/src/context/ThemeContext";

const AtomicButton = () => {
  const { theme } = ChangeTheme();

  return <button className={`atomicButton ${theme}`}>AtomicButton</button>;
};

export default AtomicButton;
