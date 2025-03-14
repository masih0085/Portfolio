import React, { createContext, useContext, useState } from 'react';

interface DrawerContextType {
  open: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <DrawerContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context)
    throw new Error('useDrawer must be used within a DrawerProvider');
  return context;
};
