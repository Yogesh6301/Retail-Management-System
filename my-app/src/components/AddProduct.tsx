import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import axios from 'axios';
import '../stylecss/AddProduct.css';

export const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const products = useContext(ProductContext);
    const navigate = useNavigate();

    const handleFormSubmit = (data:any) => {
        console.log(data);
        axios.post("http://localhost:5000/products", data)
            .then(() => navigate("/manageproduct"))
            .catch(error => console.error("Error:", error));
    };

    return (
        <div className="add-product-container">
            <form className="add-product-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <label>ProductName</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: true, minLength: 3 })}
                    className="form-input"
                />
                {errors.name && errors.name.type === "required" && <span className="form-error">Name is required</span>}
                {errors.name && errors.name.type === "minLength" && <span className="form-error">Minimum 3 chars is required</span>}
                <br />

                <label>ProductPrice</label>
                <input
                    type="number"
                    id="price"
                    {...register('price', { required: true })}
                    className="form-input"
                />
                {errors.price && errors.price.type === "required" && <span className="form-error">Price is required</span>}
                <br />

                <input type="submit" value="Submit" className="submit-button" />
            </form>
        </div>
    );
}
