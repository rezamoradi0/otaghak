import React, { createContext, useReducer } from "react";

const HeaderContext = createContext(null);

const initiaState = {
  theme: true,
};

export const types = {
  TOGGLE_THEME: "TOGGLE_THEME",
};

const toggleReducer = (state , action) => {
  switch (action.type) {
    case types["TOGGLE_THEME"]:
      state = { ...state, theme: !state.theme };
    default:
      break;
  }
  return state;
};
export const HeaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toggleReducer, initiaState);

  return (
    <HeaderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderContext;
