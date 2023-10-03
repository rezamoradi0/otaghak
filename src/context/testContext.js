import React, { createContext, useState } from "react";
const HeaderContext = createContext(null);

export const HeaderProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const handleToggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <HeaderContext.Provider
      value={{
        theme,
        handleToggleTheme,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderContext;
