import { useState } from "react";

import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SearchItem from "./components/SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");
  const [searchText, setSearchText] = useState("");

  function setAndSaveToLocalStorage(updatedList) {
    setItems(updatedList);
    localStorage.setItem("shoppingList", JSON.stringify(updatedList));
  }

  function addItem(itemText) {
    const generateNewId = items.length ? items[items.length - 1].id + 1 : 1;
    const newAddedItem = { id: generateNewId, checked: false, item: itemText };
    const newUpdatedItemsList = [...items, newAddedItem];
    setItems(newUpdatedItemsList);
    setAndSaveToLocalStorage(newUpdatedItemsList);
  }

  function handleCheck(id) {
    const newUpdatedItemsList = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setAndSaveToLocalStorage(newUpdatedItemsList);
  }

  function handleDelete(id) {
    const newUpdatedItemsList = items.filter((item) => item.id !== id);
    setAndSaveToLocalStorage(newUpdatedItemsList);
  }

  function handleAddNewItemSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddNewItemSubmit={handleAddNewItemSubmit}
      />
      <SearchItem searchText={searchText} setSearchText={setSearchText} />
      <Content
        items={items.filter((itemObj) =>
          itemObj.item.toLowerCase().includes(searchText.toLowerCase())
        )}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}
export default App;
