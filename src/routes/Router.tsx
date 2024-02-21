import { createContext, useState } from 'react';

interface LocationContextProps {
  location: {
    pathName: string;
  };
  setLocation: React.Dispatch<React.SetStateAction<{ pathName: string }>>;
}

export const LocationContext = createContext<LocationContextProps>(null!);

interface MyRouterProps {
  children: React.ReactNode;
}

export const Router = ({ children }: MyRouterProps) => {
  const [location, setLocation] = useState({ pathName: '/' });

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
