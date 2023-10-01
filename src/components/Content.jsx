import ItemList from "./ItemList";

function Content({ items, setItems, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>List is empty.</p>
      )}
    </main>
  );
}
export default Content;
