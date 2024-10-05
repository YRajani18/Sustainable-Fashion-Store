import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';
import ProductDetail from './components/ProductDetail';

const App = () => {
    const [favorites, setFavorites] = useState([]);

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home setFavorites={setFavorites} favorites={favorites} />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites favorites={favorites} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} /> 
            </Routes>
        </Router>
    );
};

export default App;
