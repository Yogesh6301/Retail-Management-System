
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../utility/Product';
export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null); // Provide the initial type

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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h6>Product Details for ID: {id}</h6>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
