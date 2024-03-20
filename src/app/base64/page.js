"use client"
import React, { useState } from "react";

function ImageBlob(){
const [imgs,setImgs] = useState()

const handleChange=(e)=>{

const data = new FileReader()

data.addEventListener('load',()=>{

  console.log("data >>>",data)
setImgs(data.result);
})
data.readAsDataURL(e.target.files[0])

}

console.log(imgs)

return(

<div>
  <h1>base64 of image demo</h1>
<input type= 'file' onChange={handleChange} /><br/>

<img src={imgs} height="200px" width= "200" />
</div> )
}

export default ImageBlob;
