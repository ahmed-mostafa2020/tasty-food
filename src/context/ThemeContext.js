import { createContext, useContext, useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

const DarkThemeContext = createContext();

// Func will be called to fetch any data from passed values by construction
export const ChangeTheme = () => {
  return useContext(DarkThemeContext);
};

const DarkThemeProvider = ({ children }) => {
  const [myMode, setMyMode] = useState("light");

  const myPalette =
    myMode == "light"
      ? {
          background: {
            default: "#FFFFFF",
            mainColor: "#e60000",
            secColor: "#fec223",
            footer: "rgba(231, 232, 232, 0.6)",
            copy_rights: "rgba(255, 255, 255, 0.30)",
            shaped_border: "#E7E8E8",
          },
          text: {
            primary: "#131313",
            mainColor: "#e60000",
            secColor: "#fec223",
            light: "#fff",
            dark: "#131313",
          },
          divider: {
            primary: "#dddcdc",
          },
          shadowColor: {
            red: "rgba(207, 20, 34, 0.3)",
            yellow: "rgba(254, 194, 35, 0.3)",
          },
        }
      : {
          background: {
            default: "#131313",
            mainColor: "#e60000",
            secColor: "#fec223",
            footer: "rgba(19, 19, 19, 0.6)",
            copy_rights: "rgba(231, 232, 232, 0.08)",
            shaped_border: "#131313",
          },
          text: {
            primary: "#E7E8E8",
            mainColor: "#fec223",
            secColor: "#e60000",
            light: "#fff",
            dark: "#131313",
          },
          divider: {
            primary: "#5c5a5a",
          },
          shadowColor: {
            red: "rgba(207, 20, 34, 0.3)",
            yellow: "rgba(254, 194, 35, 0.3)",
          },
        };

  const lightTheme = createTheme({
    palette: {
      background: {
        default: "#FFFFFF",
      },
      text: {
        primary: "#131313",
      },
      divider: {
        primary: "#dddcdc",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#131313",
      },
      text: {
        primary: "#E7E8E8",
      },
      divider: {
        primary: "#5c5a5a",
      },
    },
  });

  useEffect(() => {
    let currentMode;
    // Get the value from local storage if it exists
    currentMode = localStorage.getItem("currentMode") || "light";
    setMyMode(currentMode);
  }, []);

  return (
    <DarkThemeContext.Provider
      // Values provider will provide
      value={{ myMode, setMyMode, lightTheme, darkTheme, myPalette }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeProvider;
