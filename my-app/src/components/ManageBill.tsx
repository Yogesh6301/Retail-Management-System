import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Product } from '../utility/Product';

function ManageBill() {
  const [products, setProducts] = useState<Product[]>([]);
  const [mybill, setTotalBill] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:5002/dbcart')
         .then(response => {
         setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  // const [mybill,setTotalBill]=useState(0);
  useEffect(() => {
   // Calculate the total bill whenever the products in the cart change
   const calculatedTotal = products.reduce((sum, product) => sum + Number(product.price),0);
  setTotalBill(calculatedTotal);
    console.log(calculatedTotal)
 }, [products]);

  return (
    <div>
    <table className="table table-striped">
    <thead>
       <tr>
           <th>Name</th>
            <th>Price</th>
        </tr>
   </thead>
   <tbody>
     {products?.map(product => (
      <tr key={product.id}>
         <td>{product.name}</td>
         <td>{product.price}</td>
         <td>
          {/* <Link to={`/productdetails/${product.id}`}>View</Link> */}
          {/* <Link to={`/updateproduct/${product.id}`}>Update</Link> */}
          {/* <Link to={`/update/${product.id}`}>Update</Link> */}
          {/* <button onClick={() => removeProduct(product.id)}>Remove</button> */}
           {/* <button onClick={() => addToCart(product)}>AddtoCart</button> */}
         </td>
      </tr>
    ))}
    </tbody>
 </table>
 <h6 >Total {mybill} </h6>
</div>)
}
export default  ManageBill