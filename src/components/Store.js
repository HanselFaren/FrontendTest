import React, { useState } from 'react';

const Store = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: itemName,
      price: itemPrice,
      description: itemDescription
    };
    setItems([...items, newItem]);
    setItemName('');
    setItemPrice('');
    setItemDescription('');
  };

  const handleEditItem = (itemId) => {
    const itemToEdit = items.find((item) => item.id === itemId);
    if (itemToEdit) {
      setItemName(itemToEdit.name);
      setItemPrice(itemToEdit.price);
      setItemDescription(itemToEdit.description);
      setEditItemId(itemId);
    }
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const updatedItems = items.map((item) =>
      item.id === editItemId
        ? {
            ...item,
            name: itemName,
            price: itemPrice,
            description: itemDescription
          }
        : item
    );
    setItems(updatedItems);
    setItemName('');
    setItemPrice('');
    setItemDescription('');
    setEditItemId(null);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Store Page</h2>
      <h3>Add/Edit Item</h3>
      <form onSubmit={editItemId !== null ? handleUpdateItem : handleAddItem}>
        <label>
          Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
        </label>
        <label>
          Price:
          <input type="text" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} required />
        </label>
        <button type="submit">{editItemId !== null ? 'Update Item' : 'Add Item'}</button>
        {editItemId !== null && (
          <button type="button" onClick={() => setEditItemId(null)}>
            Cancel Edit
          </button>
        )}
      </form>
      <h3>Items</h3>
      {items.length === 0 ? (
        <p>No items available in the store.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <p>Description: {item.description}</p>
              <button type="button" onClick={() => handleEditItem(item.id)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDeleteItem(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Store;
