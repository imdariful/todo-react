function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: `This is a default title! can't find title props.`,
};
export default Header;
