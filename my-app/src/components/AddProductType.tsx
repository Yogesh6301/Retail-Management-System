import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AddProductType = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();
    //const products = useContext(ProductContext);
    const navigate=useNavigate();
    const handleFormSubmit=(data:any)=>{console.log(data);
    //products.push(data);
    axios.post("http://localhost:5001/productstype",data)
    navigate("/manageproducttype");

    }

  return (
    <div>
      
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label>ProductTypeName</label>
        <input
          type="text"
          {...register('name', { required: true, minLength: 3 })}
        />
        {errors.name && errors.name.type === "required" && <span>Name is required</span>}
        {errors.name && errors.name.type === "minLength" && <span>Minimum 3 characters are required</span>}
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}



