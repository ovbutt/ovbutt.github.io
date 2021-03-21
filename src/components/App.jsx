import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import { Intro } from "./Intro/Intro";
import { Skills } from "./Skills/Skills";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    setIsDark(JSON.parse(localStorage.getItem("isDark")));
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark, () => localStorage.setItem("isDark", isDark));
  };

  return (
    <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <>
          <GlobalStyles />
          <Header />
          <Intro />
          <Skills />
          <Footer />
        </>
      </ThemeProvider>
    </StyleProvider>
  );
};

export default App;
