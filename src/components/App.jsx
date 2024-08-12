import { useEffect, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Statistics from "./Statistics";

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("shoppingList");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to delete all items?")) {
      setItems([]);
    }
  }

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500 text-white">
      <header>
        <Logo />
      </header>
      <main className="mx-auto h-[85vh] max-w-3xl rounded-md border border-gray-100 bg-gray-600 bg-opacity-30 bg-clip-padding p-4 backdrop-blur-sm backdrop-filter">
        <Form onAddItem={handleAddItem} />
        <PackingList
          items={items}
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
      </main>
      <footer className="mx-auto my-2">
        <Statistics items={items} />
      </footer>
    </div>
  );
}

export default App;
