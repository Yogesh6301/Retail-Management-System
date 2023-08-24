import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import axios from'axios';

export const AddProduct = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();
    const products = useContext(ProductContext);
    const navigate=useNavigate();
    const handleFormSubmit=(data:any)=>{console.log(data);
    //products.push(data);
    axios.post("http://localhost:5000/products",data)
    navigate("/manageproduct");

    }

  return (
    <div>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* <label>ProductId</label>

            <input type = "number" id="id"{...register('id',{required:true})}/>
            {errors.id && errors.id.type==="required"&& <span> Id is required</span>}
            <br/> */}

            <label>ProductName</label>
            <input type = "text" id="name"{...register('name',{required:true,minLength:3})}/>
            {errors.name && errors.name.type==="required"&& <span> Name is required</span>}
            {errors.name && errors.name.type==="minLength"&& <span> Minimum 3 chars is required</span>}
            <br/>

            <label>ProductPrice</label>
            <input type = "number" id="price"{...register('price',{required:true})}/>
            {errors.price && errors.price.type==="required"&& <span> Price  is required</span>}
            <br/>
           <input type="submit"value="Submit"></input>

            </form>
            </div>
  )
}
