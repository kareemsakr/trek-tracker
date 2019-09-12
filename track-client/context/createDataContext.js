import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};

    for (const key in actions) {
      if (actions.hasOwnProperty(key)) {
        boundActions[key] = actions[key](dispatch);
      }
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
