import { createContext, useEffect, useState } from 'react';

interface RouterContextInterface {
  pathName: string;
  changeRouterPath: (path: string) => void;
}

export const RouterContext = createContext<RouterContextInterface>({
  pathName: '',
  changeRouterPath: () => null,
});

interface MyRouterPropsInterface {
  children: React.ReactNode;
}

export const Router = ({ children }: MyRouterPropsInterface) => {
  const [pathName, setPathName] = useState(window.location.pathname);

  const changeRouterPath = (path: string) => {
    setPathName(path);
    window.history.pushState(null, '', path);
  };

  useEffect(() => {
    window.onpopstate = () => {
      setPathName(window.location.pathname);
    };

    return () => {
      window.onpopstate = null;
    };
  }, []);

  return (
    <RouterContext.Provider value={{ pathName, changeRouterPath }}>
      {children}
    </RouterContext.Provider>
  );
};
