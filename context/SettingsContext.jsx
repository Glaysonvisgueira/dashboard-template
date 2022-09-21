import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";

export const SettingsContext = createContext({});

const lightTheme = {
  colors: {
    background: "#000",
    backgroundSecondary: "#272727",
    branding: "#fa2ac1",
    title: "#fff",
    inactiveTitle: "#8b8b8b",
    subtitle: "#ccc",
    body: "#ccc",
    contrastText: "#2b2b2b",
    caption: "#ccc",
    icon: "#fff",
    iconHover: "#ccc",
    shadow: "",
  },
};

const darkTheme = {
  colors: {
    background: "#000",
    backgroundSecondary: "#272727",
    branding: "#fa2ac1",
    title: "#fff",
    inactiveTitle: "#8b8b8b",
    subtitle: "#ccc",
    body: "#ccc",
    contrastText: "#2b2b2b",
    caption: "#ccc",
    icon: "#fff",
    iconHover: "#ccc",
    shadow: "",
  },
};

const listaTemas = {
  dark: darkTheme,
  light: lightTheme,
};

export default function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  function changeTheme(newTheme) {
    setTheme(listaTemas[newTheme]);
  }

  return (
    <SettingsContext.Provider value={{ changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
}
