import LineItem from "./LineItem";

const ItemList = ({ items, setItems, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          id={item.id}
          item={item.item}
          checked={item.checked}
          key={item.id}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ItemList;
