import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../utility/ProductType';
import '../stylecss/ManageProductType.css';
export const DemoType = () => {
    const [products, setProducts] = useState<ProductType[] | null>();

    useEffect(() => {
        axios.get("http://localhost:5001/productstype")
            .then((response) => {
                setProducts(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const removeProduct = (productId: number) => {
        axios.delete(`http://localhost:5001/productstype/${productId}`)
            .then(() => {
                setProducts(prevProducts => prevProducts?.filter(product => product.id !== productId));
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="demo-type-container">
            <table className="product-table table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td className="product-actions">
                                <Link to={`/productdetailstype/${product.id}`} className="btn btn-primary">View</Link>
                                <Link to={`/updatetype/${product.id}`} className="btn btn-warning">Update</Link>
                                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
