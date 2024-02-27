import { RouterContext } from '@app/routes/Router';
import { useContext } from 'react';

interface MyLinkProps {
  children?: React.ReactNode;
  to: string;
}

export const Link = ({ children, to }: MyLinkProps) => {
  const { changeRouterPath } = useContext(RouterContext);
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        changeRouterPath(to);
      }}
    >
      {children}
    </a>
  );
};
