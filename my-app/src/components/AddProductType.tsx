import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../stylecss/AddProductType.css';
import axios from 'axios';
export const AddProductType = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const handleFormSubmit = (data:any) => {
        console.log(data);
        axios.post("http://localhost:5001/productstype", data);
        navigate("/manageproducttype");
    }

    return (
        <div className="add-product-type-container">
            <form className="add-product-type-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <label className="add-product-type-label">ProductTypeName:</label>
                <input
                    type="text"
                    {...register('name', { required: true, minLength: 3 })}
                    className="add-product-type-input"
                />
                {errors.name && errors.name.type === "required" && <span className="add-product-type-error">Name is required</span>}
                {errors.name && errors.name.type === "minLength" && <span className="add-product-type-error">Minimum 3 characters are required</span>}
                <br />

                <input type="submit" value="Submit" className="add-product-type-button" />
            </form>
        </div>
    )
}
