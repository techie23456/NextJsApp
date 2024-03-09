
"use client"
import {database} from "../firebaseConfig";
import { push ,ref,set } from "firebase/database";
import React ,{useState,useEffect} from "react" 

function Enquiry() {

  const [Fname,setFname]  = useState("");
  const [Lname,setLname] =  useState("");
  const [contact,setContact] =  useState("");


  const handleAddData = (e) =>{
    try{

      e.preventDefault();
      const usersRef = ref(database,'users');
      const newDataRef = push(usersRef);
      set(newDataRef,{
        Fname: Fname,
        Lname: Lname,
        contact: contact,
      });

      setFname("");
      setLname("");
      setContact("");

      alert("data inserted ");

    } catch (error)
    {
      console.error 
    }
    
  }

  return (
    <div>
      <br></br><h1 className='text-center'>Enquiry Page</h1>

      <form className="login" action={handleAddData}>
  <h2>💫💫💫💫💫Please Enter your Name and Contact :💫💫💫💫💫</h2>
  
     <input type="text" placeholder="First Name"
     value = {Fname}
      onChange = {(e) => setFname(e.target.value)}
     />

    <input type="text" placeholder="Last Name" 
    value = {Lname}
    onChange = {(e) => setLname(e.target.value)}
   />

  <input type="text" placeholder="contact"
    value = {contact}
   onChange = {(e) => setContact(e.target.value)}
  />

    <button onClick={handleAddData}
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"> 💫💫💫💫💫💫💫Save💫💫💫💫💫💫 </button>

     </form>
    </div>
  )
}

export default Enquiry;
