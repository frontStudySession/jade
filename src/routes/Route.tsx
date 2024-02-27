import { useCallback, useContext, useEffect, useState } from 'react';
import { RouterContext } from './Router';

interface MyRouteProps {
  path: string;
  component: React.ReactElement;
}

export const Route = ({ path, component }: MyRouteProps) => {
  const { pathName } = useContext(RouterContext);
  const [isPath, setIsPath] = useState<boolean>(false);

  const route = useCallback(
    (pathname: string) => {
      setIsPath(path === pathname);
    },
    [path]
  );

  useEffect(() => {
    route(pathName);
  }, [pathName, route]);

  return isPath ? component : null;
};
