function Footer({ items }) {
  const today = new Date();

  return (
    <footer>
      {items.length} {items.length === 1 ? "item" : "items"}
    </footer>
  );
}
export default Footer;
