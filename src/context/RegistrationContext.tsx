import React, {useContext} from 'react';

type RegistrationContextType = {};

export const RegistrationContext = React.createContext<RegistrationContextType>(
  {},
);

type Props = {
  children?: React.ReactNode;
};

export const RegistrationContextProvider = ({children}: Props) => {
  const value = {};
  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContent = () => useContext(RegistrationContext);
