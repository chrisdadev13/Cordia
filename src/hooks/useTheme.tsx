import React from "react";

export default function useTheme() {
  const [dark, setDark] = React.useState<boolean>(false);
  const theme = dark === true ? "dark" : "light";

  const toggleTheme = () => {
    setDark(!dark);
  };

  React.useEffect(() => {
    const root = window.document.documentElement;

    localStorage.setItem("theme", theme);

    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
      root.classList.add(theme);
    } else {
      setDark(false);
      root.classList.remove("dark");
    }
  }, [dark, theme]);

  return {
    dark,
    toggleTheme,
  };
}
