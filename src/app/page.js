'use client'

import {database} from "./firebaseConfig";
import { push ,ref,set } from "firebase/database";
import React ,{useState,useEffect} from "react"  

export default function Home() {

  const [name,settName]  = useState("");
  const [email,setEmail] =  useState("");

  const handleAddData = () =>{
    try{

      console.log("#####")

      const usersRef = ref(database,'users');
      const newDataRef = push(usersRef);

      console.log("#####$$$",newDataRef)

      set(newDataRef,{
        name: name,
        email: email,
      });

      

      settName("");
      setEmail("");

      alert("data inserted ");

    } catch (error)
    {
      console.error 
    }
    
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>Add Data to firestore</h1>

     
         <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name:
            </label>

            <input 
            type="text"
            id="name"
            className=" w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value = {name}
            onChange = {(e) => settName(e.target.value)}
            />
         </div>


         <div className="mb-4">
            <label htmlFor="mail" className="block text-gray-700 font-bold mb-2">
             Mail:
            </label>

            <input 
            type="text"
            id="mail"
            className=" w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            />
         </div>

         <div className="text-center">
          <button onClick={handleAddData}
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"> Save</button>
         </div>
        </main>
  );
}
