import React from "react";

export default function useTheme() {
  const [dark, setDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      setDark(true);
      window.document.documentElement.classList.add(currentTheme);
    } else {
      setDark(false);
      window.document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    if (!dark) {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      window.document.documentElement.classList.remove("dark");
    }
  };

  return {
    dark,
    toggleTheme,
  };
}
