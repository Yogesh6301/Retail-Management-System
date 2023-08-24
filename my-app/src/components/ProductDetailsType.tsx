
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../utility/Product';
import { ProductType } from '../utility/ProductType';
export const ProductDetailsType = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null); // Provide the initial type

  useEffect(() => {
    const fetchProductDetailsType = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/productstype/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (id) {
      fetchProductDetailsType();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h6>Product Details for ID: {id}</h6>
      <p>Name: {product.name}</p>
    </div>
  );
};

export default ProductDetailsType;
