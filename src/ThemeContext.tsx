import { createContext, useState } from "react";

type themeProps = "light" | "dark";

const ThemeContext = createContext<themeProps>("light");

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<themeProps>("light");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
