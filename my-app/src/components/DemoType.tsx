import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../utility/ProductType';

export const DemoType = () => {

    const [products,setProducts]=useState<ProductType[] | null>();
  useEffect(() => {
     axios.get("http://localhost:5001/productstype").then((response)=>{
      setProducts(response.data);
     }

     ).catch(error=>console.log(error))
  }, [])

  const [remove, setRemove] = useState<ProductType[] | null>(null);
// Function to remove a product by its ID
const removeProduct = (productId:number) => {
  axios.delete(`http://localhost:5001/productstype/${productId}`)
    .then(() => {
      // After successful deletion, update the products state to remove the deleted product
      setProducts(prevProducts => prevProducts?.filter(product => product.id !== productId));
    })
    .catch(error => console.log(error));
};
useEffect(() => {
   axios.get("http://localhost:5001/productstype")
     .then((response) => {
       setProducts(response.data);
     })
     .catch(error => console.log(error));
 }, []);

  return (
    <div>
            <table className="table table-striped">
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
                 <td>
                 <Link to={`/productdetailstype/${product.id}`}>View</Link>
                 <Link to={`/updatetype/${product.id}`}>Update</Link>
                 <button onClick={() => removeProduct(product.id)}>Remove</button>
                 </td>
              </tr>
            ))}
            </tbody>        
         </table>
       </div>

          )
 }
  

