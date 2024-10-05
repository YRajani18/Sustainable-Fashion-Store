import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching product details');
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="product-detail">
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <img src={product.image} alt={product.name} />
                    <p>{product.description}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <button>Add to Cart</button>
                </>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
};

export default ProductDetail;
