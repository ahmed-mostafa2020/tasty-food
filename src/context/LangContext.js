import { createContext, useContext, useState } from "react";

const LangContext = createContext();

// Func will be called to fetch any data from passed values by construction
export const ChangeLang = () => {
  return useContext(LangContext);
};

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  return (
    <LangContext.Provider
      // Values provider will provide
      value={{ lang, setLang }}
    >
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
