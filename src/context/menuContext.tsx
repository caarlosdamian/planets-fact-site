import { createContext, ReactNode, useContext, useState } from 'react';
import { MenuContextI } from '../types';

export const menuContext = createContext({});

export const useMenuContext = (): MenuContextI => {
  const context = useContext(menuContext);
  if (!context) {
    throw Error('You need to use context provider');
  }
  return context as MenuContextI;
};

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen((prev) => !prev);
  };
  return (
    <menuContext.Provider value={{ toggle, isOpen }}>
      {children}
    </menuContext.Provider>
  );
};
