import NextLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({ href, children }) => {
  return (
    <NextLink href={href} style={{ textDecoration: 'none', color: '#000' }}>
      {children}
    </NextLink>
  );
};

export default Link;
