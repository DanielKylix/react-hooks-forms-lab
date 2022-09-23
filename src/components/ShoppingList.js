import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import e from "express";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("cheese");
  const [data, setData] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const onSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const itemsToDisplay = items.filter((item) => {
    if (searchItem === item.name) return true;

    return item.name === searchItem;
  });

  const onItemFormSubmit = (formData) => {
    const newArray = [...data, formData];
    setData(newArray);
  };

  return (
    <div className="ShoppingList">
      <ItemForm items={items} onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={searchItem}
        onSearchChange={onSearchChange}
        om
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
