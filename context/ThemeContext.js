import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const defaultThemes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeProvider = ({ children }) => {
  const [themes, setThemes] = useState(defaultThemes);

  return (
    <ThemeContext.Provider value={{ themes, setThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
