// context/GlobalState.js

// using the built-in Context API in React to manage global state of the app
import React, { createContext, useReducer } from 'react';

const initialState = { isMenuOpen: false };

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
