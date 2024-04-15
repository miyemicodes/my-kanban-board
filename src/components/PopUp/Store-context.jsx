import React, {useState, useContext} from "react";
import { createContext } from "react";
import { DefaultData } from "../Datastructure";

export const StoreContext = createContext(null);

export default function StoreContextProvider({ children }) {


  const [mainState, setMainState] = useState(DefaultData);

  return (
    <StoreContext.Provider value={[mainState, setMainState]}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "useStoreContext must be used withthin StoreContextProvider"
    );
  }
  return context;
}