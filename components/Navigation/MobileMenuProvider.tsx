import React, { useState } from 'react';

interface IMenuOpenContext {
  menuOpen: boolean;
  toggleMenuOpen?: () => void;
}

const defaultState = {
  menuOpen: false,
};

export const MobileMenuContext = React.createContext<IMenuOpenContext>({
  menuOpen: false,
  toggleMenuOpen: () => {},
});

export const MobileMenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(defaultState.menuOpen);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MobileMenuContext.Provider
      value={{
        menuOpen,
        toggleMenuOpen,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
