import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
function AddItem({ newItem, setNewItem, handleAddNewItemSubmit }) {
  const inputRef = useRef(); // creating a reference 'inputRef'

  return (
    <form className="addForm" onSubmit={handleAddNewItemSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef} // attached the defined reference to this input
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()} // this code programmatically gives focus to the input element referenced by inputRef
      >
        <FaPlus />
      </button>
    </form>
  );
}
export default AddItem;
