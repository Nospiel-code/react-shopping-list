function Statistics({ items }) {
  if (!items.length) return <p>Start adding items to your list!</p>;

  const allItems = items.length;
  const packedItems = items.filter((item) => item.isPacked).length;
  const percentage = Math.round((packedItems / allItems) * 100);

  return (
    <p>
      {percentage === 100
        ? "You got everything"
        : `You got ${packedItems} (${percentage}%) out of ${allItems}`}
    </p>
  );
}

export default Statistics;
