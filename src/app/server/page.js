import React from 'react'

async function fetchProducts(){
  const productsResponse = await fetch("https://dummyjson.com/quote",{
  cache: "no-store"});

  console.log("fetching products",productsResponse);
  let resp = productsResponse.json();

 return resp.quotes;

}
export default async function page()
 {

  const products = await fetchProducts();
  console.log(">>>>>>",(products));

  let resp = products;
  console.log("Rendering product component");
 // console.log("number of products",(products.quotes).length);
 console.log(products);
    
 
  return(<>
    { 
    resp.map((item) =>{
     
      <h1>{item.id}</h1>
    })
    }
</>)
  
}
