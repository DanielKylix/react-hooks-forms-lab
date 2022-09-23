import e from "express";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({ onItemFormSubmit }) {
  const initialState = { name: "Ice Cream", category: "Dessert", id: uuid() };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit(formData);
  };

  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
