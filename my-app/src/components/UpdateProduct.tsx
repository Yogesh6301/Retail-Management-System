import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../utility/Product';

export const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState(0);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  const updateProduct = async () => {
    try {
      const updatedProductData = {
        name: updatedName,
        price: updatedPrice,
        // Add other fields if needed
      };

      const response = await axios.put(`http://localhost:5000/products/${id}`, updatedProductData);
      setProduct(response.data);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h6>Product Details for ID: {id}</h6>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>

      <h6>Update Product</h6>
      <input
        type="text"
        placeholder="New Name"
        value={updatedName}
        onChange={event => setUpdatedName(event.target.value)}
      />
      <input
        type="number"
        placeholder="New Price"
        value={updatedPrice}
        onChange={event => setUpdatedPrice(parseFloat(event.target.value))}
      />
      <button onClick={updateProduct}>Update</button>
    </div>
  );
};

export default UpdateProduct;
