import "./styles/main.scss";
import { IntroductionPanel, FormPanel, ThemeChanger } from "./components/";
import 'alertifyjs/build/css/alertify.css';
import { useState, useEffect } from "react";


const App = () => {
  const [theme, setTheme] = useState("");

  const getLocalStorage = () => {
    const localTheme = localStorage.getItem("theme");
    !localTheme && localStorage.setItem("theme", "light");
    localTheme === "light" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    getLocalStorage();

    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

  const handleChange = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="app flex">
      <IntroductionPanel />
      <ThemeChanger handleChange={handleChange} theme={theme} />
      <FormPanel />
    </div>
  );
};

export default App;
