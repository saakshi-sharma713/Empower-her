import React from 'react'

const ProductList = ({products,handleSelect}) => {
    const Items =products;
 
  return (
    <div>
      <div style={container} >
    
   {Items.map((product)=>
       <div style={card}  onClick={()=> handleSelect(product)}>
        <h2>Product : {product.name}</h2>
        <h3>Price : {product.price}</h3>
        </div>
    )}
</div>

    </div>
  )
}

const container={
    display:"flex",
    gap:"15px",
}

const card ={
    backgroundColor:"royalblue",
    color:"white",
    padding:"10px"

}


export default ProductList
