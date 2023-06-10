// context/GlobalState.js
import React, { createContext, useReducer } from 'react';

const initialState = { 
  isMenuOpen: false, 
  isOverlayActive: false  // Add new state variable
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'TOGGLE_OVERLAY': // Add new action
      return { ...state, isOverlayActive: !state.isOverlayActive };
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
