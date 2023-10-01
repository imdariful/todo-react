function SearchItem({ searchText, setSearchText }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="searchForm">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
export default SearchItem;
