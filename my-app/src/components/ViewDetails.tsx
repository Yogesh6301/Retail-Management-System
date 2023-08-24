import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
export const ViewDetails = () => {

    const { id } = useParams();

    const  products  = useContext(ProductContext);

    const productId = id ? parseInt(id, 10) : null;

    const product = products.find(product => product.id === productId);

 

    if (!product) {

        return <div>Product not found :  {id}</div>;

    }

 

    return (

        <div>

            <h6>Product Details for ID: {id}</h6>

            <p>Name: {product.name}</p>

            <p>Price: {product.price}</p>

        </div>

    );

}

 

export default ViewDetails;