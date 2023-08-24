import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Product } from '../utility/Product';
import { Cartt } from '../utility/Cartt';
export const Cart = () => {
const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios.get('http://localhost:5002/dbcart')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

 

  const [remove, setRemove] = useState<Product[] | null>(null);

// Function to remove a product by its ID

const removeProduct = (productId:number) => {

  axios.delete(`http://localhost:5002/dbcart/${productId}`)
    .then(() => {
      // After successful deletion, update the products state to remove the deleted product
      setProducts(prevProducts => prevProducts?.filter(product => product.id !== productId));
    })
    .catch(error => console.log(error));
};

useEffect(() => {
   axios.get("http://localhost:5002/dbcart")
     .then((response) => {
       setProducts(response.data);
     })
     .catch(error => console.log(error));
 }, []);

//  console.log((Number(products[1].price)+Number(products[0].price)))
 const [bill, setBill] = useState<Cartt[]>([]);
 const checkout = () => {
  setBill(products);
};

  useEffect(() => {
    axios.post('http://localhost:5003/bill', bill)
      .then(response => {
        console.log('Product added to bill:', response.data);
      })
      .catch(error => {
        console.error('Error adding product to bill:', error);
      });
  }, []); // Run this effect whenever `bill` changes

  return (

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
          <button onClick={() => removeProduct(product.id)}>Remove</button>
         </td>

      </tr>

    ))}

    </tbody>

   

 </table>

 <h6>

  <button onClick={checkout}> Proceed to checkout</button>

 </h6>

</div>

  )

}