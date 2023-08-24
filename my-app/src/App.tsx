import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Contactus } from './components/Contactus';
import { Navigations } from './components/Navbar';
import { AddProduct } from './components/AddProduct';
import { PageNotFound } from './components/PageNotFound';
import { Demo } from './components/Demo';

import { Logout } from './components/Logout';
import { Product } from './utility/Product';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';
import { DemoType } from './components/DemoType';
import { AddProductType } from './components/AddProductType';
import UpdateProductType from './components/UpdateProductType';
import ProductDetailsType from './components/ProductDetailsType';
import { ProductContext } from './context/ProductContext';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import ManageBill from './components/ManageBill';

function App() {
    // const msg ="Hello";
    const products:Product[]=[{
      id:1001,name:"Laptop",price:49999},
      {id:1002,name:"Headphone",price:12999},
      {id:1003,name:"Mobile",price:25999},
      {id:1004,name:"LCD",price:25000}];
  
  return (
    <div >
      <ProductContext.Provider value={products}>
      <Router>
      <Navigations></Navigations>
      <Routes>
        <Route path ="/" element={< Login></Login>}></Route>
        {/* <Route path ="/displayProducts" element={<Demo></Demo>}></Route> */}
        <Route path ="/manageproduct" element={<Demo></Demo>}></Route>
        <Route path ="/contactus"element ={<Contactus></Contactus>}></Route>
        {/* <Route path ="/manageproduct" element={<Demo></Demo>}></Route> */}
        <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path ="/manageproducttype" element={<DemoType></DemoType>}></Route>
        <Route path="/addproducttype" element={<AddProductType></AddProductType>}></Route>
        {/* <Route path ="/editProduct/:id"element ={<EditProduct></EditProduct>}></Route> */}
        <Route path ="/productdetails" element={<ProductDetails/>}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
        <Route path ="/productdetailstype" element={<ProductDetailsType/>}></Route>
        <Route path ="/update/:id" element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path ="/updatetype/:id" element={<UpdateProductType></UpdateProductType>}></Route>
        <Route path="/productdetailstype/:id" element={<ProductDetailsType/>}></Route>
        <Route path ="/cart" element={<Cart></Cart>}></Route>
        <Route path="/managebill" element={<ManageBill></ManageBill>}></Route>

        
        <Route path ="/logout"element ={<Logout></Logout>}></Route>

        <Route path ="/*"element ={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Router>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
