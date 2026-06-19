import { useState } from "react";

import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      <div className={dark ? "dark-theme" : "light-theme"}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
