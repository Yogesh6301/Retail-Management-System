import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Product } from '../utility/Product';
import { Cartt } from '../utility/Cartt';
import '../stylecss/Cart.css';

export const Cart = () => {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        axios.get('http://localhost:5002/dbcart')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const removeProduct = (productId: number) => {
        axios.delete(`http://localhost:5002/dbcart/${productId}`)
            .then(() => {
                setProducts(prevProducts => prevProducts?.filter(product => product.id !== productId));
            })
            .catch(error => console.log(error));
    };

    const [bill, setBill] = useState<Cartt[]>([]);

    const checkout = () => {
        setBill(products);
    };

    useEffect(() => {
        axios.post('http://localhost:5003/bill', bill)
            .then(response => {
                console.log('Product added to bill:', response.data);
            })
            .catch(error => {
                console.error('Error adding product to bill:', error);
            });
    }, [bill]); // Run this effect whenever `bill` changes

    return (
        <div className="cart-container">
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
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="checkout-button">
                <button className="btn btn-primary" onClick={checkout}>Proceed to Checkout</button>
            </div>
        </div>
    );
}
