import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// Func will be called to fetch any data from passed values by construction
export const ChangeTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      // Values provider will provide
      value={{ theme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
