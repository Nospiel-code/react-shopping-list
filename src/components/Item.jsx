export default function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="my-1 flex items-center justify-between rounded-xl bg-slate-400 bg-opacity-30 px-2">
      <input
        type="checkbox"
        value={item.isPacked}
        onClick={() => onToggleItem(item.id)}
        className="accent-indigo-500"
      />
      <span className={`${item.isPacked ? "line-through" : ""}`}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
