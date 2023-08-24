import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { ProductContext } from '../context/ProductContext';
// import axios from 'axios';
// import { getValue } from '@testing-library/user-event/dist/utils';
// import { validateHeaderValue } from 'http';
// export const EditProduct = () => {
// }
// function update(){
//   // const { register, handleSubmit, formState:{errors}} = useForm();
//   const{id} =useParams();
//   const[values,setValues] =useState({
//     id:id,
//     name:'',
//     price:''
//   })
//   useEffect(()=>{
//     axios.get("http://localhost:5000/products/"+id)
//     .then(res=>{
//       setValues({...values,name:res.data.name,price:res.data.price})
//     })
//     .catch(err=>console.log(err))

//   },[])

//   const navigate=useNavigate();

// const handleSubmit = (e) => {
//   e.preventDefault();
//   axios.put("http://localhost:5000/products/"+id,values)
//     .then(res=>{
//       navigate("/");
//     })
//     .catch(err=>console.log(err))



// }
  
  
    
// return (
//   <div>
//       <form  onSubmit={handleSubmit}>

//           {/* <label>EditProductId</label>

//           <input type = "number" id="id"{...register('id',{required:true})}/>
         
//           <br/>

//           <label>EditProductName</label>
//           <input type = "text" id="name"{...register}/>
         
          
//           <br/> */}

//           <label>EditProductPrice</label>
//           <input type = "number" id="price"{...register('price',{required:true})}/>
//           value={values.price}
//           <br/>
//          <input type="submit"value="EditDetails"></input>

//           </form>
//           </div>
// )
// }
// export default update