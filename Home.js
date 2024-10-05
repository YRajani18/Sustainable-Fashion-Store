import React, { useState } from 'react';
import './Home.css';
import { useCart } from '../CartContext';

const items = [
  {
    id: 1,
    name: "Organic Cotton T-Shirt",
    price: "$25.00",
    description: "Made from 100% organic cotton, this t-shirt is soft, breathable, and perfect for any casual occasion.",
    image: "https://amala.earth/products/organic-cotton-t-shirt-for-men-natural-dyed-soil-brown?",
  },
  {
    id: 2,
    name: "Recycled Polyester Jacket",
    price: "$75.00",
    description: "A stylish and warm jacket made from recycled materials, ideal for cold weather.",
    image: "https://myraymond.com/products/men-blue-solid-polyester-full-sleeve-jackets?",
  },
  {
    id: 3,
    name: "Bamboo Fiber Dress",
    price: "$60.00",
    description: "Lightweight and comfortable, this dress is made from sustainable bamboo fibers.",
    image: "https://brownliving.in/products/white-bamboo-fabric-mid-calf-dress",
  },
  {
    id: 4,
    name: "Vegan Leather Backpack",
    price: "$85.00",
    description: "A trendy backpack made from high-quality vegan leather, perfect for everyday use.",
    image: "https://www.thepostbox.in/products/pondi-backpack-dark-tan-nappa-leather?variant=40149722267730&currency=INR",
  },
  {
    id: 5,
    name: "Sustainable Denim Jeans",
    price: "$55.00",
    description: "These jeans are made from sustainably sourced denim and designed for durability and comfort.",
    image: "https://www.goingzerowaste.com/blog/sustainable-and-ethical-denim-brands-that-make-the-best-jeans/",
  },
  {
    id: 6,
    name: "Eco-Friendly Yoga Pants",
    price: "$40.00",
    description: "Perfect for your workouts, these yoga pants are made from recycled materials for a better planet.",
    image: "https://www.google.com/search?q=Eco-Friendly+Yoga+Pants&sca_esv=5a00d1dd542cba5a&rlz=1C1ONGR_enIN1079IN1079&biw=767&bih=695&udm=2&fbs=AEQNm0CvJOjjOlYGHpeb6_mX0N9Pz_0vXmyFV6JRst0G88bAGyAKbn3N-PJtAQ9FF1FHZrYRTP4a53xcxZGNMjUZGgrjDSDLqyxaFGMNwK4hUsOZ5CrLhA-Xat-wGqtxjs6Y6Ka_IHejy4UKgoiW08C3v0WhvdRi51Iclb4iTT0oBSRPGzv5bSlR5QtFhZr33l9LbhfL3vPdlJ9zR_siquhKJkwWmOvERw&sa=X&ved=0ahUKEwjGuaaLhvWIAxVYV2wGHaRyK_AQtKgLCOwK#vhid=vaJv4HW-lzQxyM&vssid=mosaic",
  },
  {
    id: 7,
    name: "Organic Wool Scarf",
    price: "$30.00",
    description: "Stay warm with this soft and cozy scarf made from 100% organic wool.",
    image: "https://itokri.com/products/2023-860-1-4-pure-wool-sanganeri-hand-block-printed-stole?currency=INR&variant=42545317347523&stkn=256a330c38f7&gadid=",
  },
  {
    id: 8,
    name: "Biodegradable Flip Flops",
    price: "$20.00",
    description: "These stylish flip flops are made from biodegradable materials, perfect for beach days!",
    image: "https://www.greensole.com/products/greensole-royal-rose-unisex-slippers",
  },
  {
    id: 9,
    name: "Fair Trade Handbag",
    price: "$90.00",
    description: "Handcrafted by artisans, this handbag is not only stylish but also supports fair trade practices.",
    image: "https://kariwala.com/newdev/product/fair-trade-bag/",
  },
];

const Home = () => {
    const { addToCart } = useCart();
    const [favorites, setFavorites] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleFavorite = (item) => {
      if (favorites.some(fav => fav.id === item.id)) {
        setFavorites(favorites.filter(fav => fav.id !== item.id));
      } else {
        setFavorites([...favorites, item]);
      }
    };
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      return (
        <div className="home">
          <nav className="navigation">
            <ul className="nav-items">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/favorites">Favorites</a></li>
            </ul>
          </nav>


  
          <div className="home-container">
            <h2>Welcome to Our Sustainable Fashion Store!</h2>
            <p>Explore our collection of eco-friendly and ethically made fashion items.</p>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search for items..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <button className="search-button">
              Search
            </button>
          </div>
  
          <div className="items-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="item-card">
                <img src={item.image} alt={item.name} className="item-image" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="item-price">{item.price}</p>
  
                <div className="button-container">
                  <button className="add-to-cart" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
  
                  <button className="favorite-btn" onClick={() => handleFavorite(item)}>
                    {favorites.some(fav => fav.id === item.id) ? "Remove from Favorites" : "Add to Favorites"}
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          <h3>Your Favorite Items:</h3>
          <div className="items-grid">
            {favorites.length === 0 ? (
              <p>No favorite items yet.</p>
            ) : (
              favorites.map(item => (
                <div key={item.id} className="item-card">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price}</p>
                </div>
              ))
            )}
          </div>
        </div>
      );
  };
  
  export default Home;