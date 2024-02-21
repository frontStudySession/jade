import { useRouter } from '@app/hooks/useRouter';

interface MyLinkProps {
  children: React.ReactNode;
  to: string;
}

export const Link = ({ children, to }: MyLinkProps) => {
  const { push } = useRouter();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        push(to);
      }}
    >
      {children}
    </button>
  );
};
