import React, { useState, useEffect } from 'react';

const Seller = () => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState('');
  const [storeName, setStoreName] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        // Replace the URL with your backend API endpoint for fetching existing stores
        const response = await fetch('https://your-backend-api.com/api/stores');
        const data = await response.json();

        if (response.ok) {
          setStores(data);
        } else {
          console.log('Failed to fetch stores.');
        }
      } catch (error) {
        console.log('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  const handleCreateStore = async () => {
    try {
      // Replace the URL with your backend API endpoint for creating a store
      const response = await fetch('https://your-backend-api.com/api/stores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: storeName,
          isPublic: isPublic,
        }),
      });

      if (response.ok) {
        console.log('Store created successfully!');
        // Reset the input fields after successful store creation
        setStoreName('');
        setIsPublic(false);
      } else {
        console.log('Failed to create store.');
      }
    } catch (error) {
      console.log('Error creating store:', error);
    }
  };

  return (
    <div>
      <h2>Seller Page</h2>
      <p>Welcome to the seller page!</p>
      <h3>Create or Select Store:</h3>
      <div>
        <label htmlFor="createStore">Create New Store:</label>
        <input
          type="radio"
          id="createStore"
          checked={!selectedStore}
          onChange={() => setSelectedStore('')}
        />
      </div>
      <div>
        <label htmlFor="selectStore">Select Existing Store:</label>
        <input
          type="radio"
          id="selectStore"
          checked={!!selectedStore}
          onChange={() => setSelectedStore(stores[0]?.id || '')}
        />
      </div>
      {selectedStore ? (
        <div>
          <p>Selected Store: {selectedStore}</p>
          {/* Render the store details and items of the selected store */}
          {/* ... */}
        </div>
      ) : (
        <div>
          <h3>Create Store:</h3>
          <div>
            <label htmlFor="storeName">Store Name:</label>
            <input
              type="text"
              id="storeName"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="isPublic">Public Store:</label>
            <input
              type="checkbox"
              id="isPublic"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
          </div>
          <button onClick={handleCreateStore}>Create Store</button>
        </div>
      )}
    </div>
  );
};

export default Seller;
