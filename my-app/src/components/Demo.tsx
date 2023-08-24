import { error } from "console";
import { validateHeaderValue } from "http";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../utility/Product";
import axios from 'axios'
import { Link } from "react-router-dom";

export const Demo=() =>{
 //const products =useContext(ProductContext);
const [products,setProducts]=useState<Product[] | null>();
  useEffect(() => {
     axios.get("http://localhost:5000/products").then((response)=>{
      setProducts(response.data);
     }

     ).catch(error=>console.log(error))
  }, [])

const [remove, setRemove] = useState<Product[] | null>(null);
// Function to remove a product by its ID
const removeProduct = (productId:number) => {
  axios.delete(`http://localhost:5000/products/${productId}`)
    .then(() => {
      // After successful deletion, update the products state to remove the deleted product
      setProducts(prevProducts => prevProducts?.filter(product => product.id !== productId));
    })
    .catch(error => console.log(error));
};
useEffect(() => {
   axios.get("http://localhost:5000/products")
     .then((response) => {
       setProducts(response.data);
     })
     .catch(error => console.log(error));
 }, []);


 const [cartItems, setCartItems] = useState<Product[]>([]);
 const addToCart = (product: Product) => {
  const existingItem = cartItems.find(item => item.id === product.id);
  if (existingItem) {
    // Update cart item's quantity
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === existingItem.id ? { ...item } : item
      )
    );
  } else {
    // Add new item to the cart
    setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
  }

  // Add the product to the cart API
  axios.post('http://localhost:5002/dbcart', product)
    .then(response => {
      console.log('Product added to cart:', response.data);
    })
    .catch(error => {
      console.error('Error adding product to cart:', error);
    });
};
 
    return(
        <div>
            <table className="table table-striped">
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
                  <Link to={`/productdetails/${product.id}`}>View</Link>
                  {/* <Link to={`/updateproduct/${product.id}`}>Update</Link> */}
                  <Link to={`/update/${product.id}`}>Update</Link>
                  <button onClick={() => removeProduct(product.id)}>Remove</button>
                   <button onClick={() => addToCart(product)}>AddtoCart</button>
                 </td>
              </tr>
            ))}

            </tbody>        

         </table>

   

       </div>

          )

 }