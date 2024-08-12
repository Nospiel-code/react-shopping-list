import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, isPacked: false, id: Date.now() };

    if (!description) return;

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add something..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-l-xl bg-indigo-500 p-1"
      ></input>
      <select
        className="bg-indigo-500 py-[0.28rem]"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {[...Array(20).keys()].map((i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <button className="rounded-r-xl bg-fuchsia-500 p-1">Add</button>
    </form>
  );
}
