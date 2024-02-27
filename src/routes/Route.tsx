import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '@app/routes/Router';

interface MyRouteProps {
  path: string;
  component: React.ReactElement;
  state?: object;
}

function changeRouter(pathname: string) {
  return window.history.pushState(null, '', pathname);
}

export const Route = ({ path, component, state }: MyRouteProps) => {
  const { pathname } = window.location;
  const [isPath, setIsPath] = useState<boolean>(false);
  const { setLocation } = useContext(LocationContext);

  const route = (pathname: string) => {
    if (path === pathname) {
      setIsPath(true);
    } else {
      setIsPath(false);
    }

    window.onpopstate = () => {
      setLocation({ pathName: pathname });
    };
  };

  useEffect(() => {
    route(pathname);
  }, [pathname]);

  return isPath ? component : null;
};
