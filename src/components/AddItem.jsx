import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
function AddItem({ newItem, setNewItem, handleAddNewItemSubmit }) {
  return (
    <form className="addForm" onSubmit={handleAddNewItemSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
}
export default AddItem;
