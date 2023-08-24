import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Product } from '../utility/Product';
import '../stylecss/ManageBill.css';
function ManageBill() {
    const [products, setProducts] = useState<Product[]>([]);
    const [mybill, setTotalBill] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5002/dbcart')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    useEffect(() => {
        const calculatedTotal = products.reduce((sum, product) => sum + Number(product.price), 0);
        setTotalBill(calculatedTotal);
    }, [products]);

    return (
        <div className="bill-container">
            <table className="bill-table table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                {/* You can add action buttons here if needed */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total-bill">
                <h6>Total: {mybill}</h6>
            </div>
        </div>
    );
}

export default ManageBill;
