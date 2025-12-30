import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ProductList from './ProductList';
const products = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1500 },
  { id: 3, name: "Tablet", price: 800 },
]; 
const Product = () => {
    const [price,setPrice] = useState(""); 
    const[count,setcount]=useState(0);
    

 const totalPrice =  useMemo(()=> { 
    console.log("Total price calculated")
    return products.reduce((sum, product) => sum + product.price, 0);
  },[]) 

 const handleSelect1 = useCallback((product)=>{
    console.log(product) 
 },[])


  return (
    <div>
       <h1>Total Price: {totalPrice}</h1>
       <h2>Counter : {count}</h2>
       <button onClick={()=> setcount(count+1)}>Increement</button>
       <h2>Product List</h2>

      <ProductList products={products}  handleSelect={handleSelect1}/>
    </div>
  )
}


export default Product
