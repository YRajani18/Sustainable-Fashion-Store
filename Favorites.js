import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites-container">
      <h2>Your Favorite Items</h2>
      {favorites.length === 0 ? (
        <p>No favorite items yet.</p>
      ) : (
        <div className="items-grid">
          {favorites.map(item => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="item-price">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
