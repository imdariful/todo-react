import { FaTrashAlt } from "react-icons/fa";
function LineItem({ id, item, handleCheck, handleDelete, setItems, checked }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
      />
      <label style={checked ? { textDecoration: "line-through" } : null}>
        {item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(id)}
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item}`} // this for screen readers
      />
    </li>
  );
}
export default LineItem;
