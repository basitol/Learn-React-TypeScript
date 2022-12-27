type HeaderProps = {
  children: string;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <h4>{children}</h4>
    </div>
  );
};

export default Header;
