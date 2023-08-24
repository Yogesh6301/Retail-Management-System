import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../stylecss/ManageProduct.css';
import { Product } from "../utility/Product";

export const Demo = () => {
    const [products, setProducts] = useState<Product[] | null>();
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const removeProduct = (productId: number) => {
        axios.delete(`http://localhost:5000/products/${productId}`)
            .then(() => {
                setProducts(prevProducts => prevProducts?.filter(product => product.id !== productId));
            })
            .catch(error => console.log(error));
    };

    const addToCart = (product: Product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(prevCartItems =>
                prevCartItems.map(item =>
                    item.id === existingItem.id ? { ...item } : item
                )
            );
        } else {
            setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
        }

        axios.post('http://localhost:5002/dbcart', product)
            .then(response => {
                console.log('Product added to cart:', response.data);
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });
    };

    return (
        <div className="demo-container">
            <table className="product-table table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td className="product-actions">
                                <Link to={`/productdetails/${product.id}`}>View</Link>
                                <Link to={`/update/${product.id}`}>Update</Link>
                                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Remove</button>
                                <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
