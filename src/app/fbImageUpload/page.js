'use client'

import Image from 'next/image'

// import styles from './page.module.css'

import { useState } from 'react'

import { analytics } from '../firebaseConfig'

import {ref,uploadBytes,getDownloadurRL, getDownloadURL} from 'firebase/storage'

export default function Upload() {
const [fileupload,setfileupload] = useState(null)

const upload= async()=>{
console.log(fileupload)
if(fileupload !== null)
{
const fileref = ref(analytics,'newfile/notes');

uploadBytes(fileref,fileupload[0]).then((data) =>{
    getDownloadURL(data.ref).then((url) =>{
        console.log("URL ",url);
    })
})

}




else{
alert('pls select file')

}

}

return (
<div>
<input type="file" onChange={(event)=>setfileupload(event.target.files)}></input>
<button onClick={upload}>upload</button>
</div>
)
}
