
"use client"
import {database} from "../firebaseConfig";
import { push ,ref,set } from "firebase/database";
import React ,{useState,useEffect} from "react" 

function Enquiry() {

  const [Fname,setFname]  = useState("");
  const [Lname,setLname] =  useState("");
  const [contact,setContact] =  useState("");
  const [photo,setPhoto] =  useState("");

  const handleChange =(e) =>{
    const data = new FileReader();
    data.addEventListener('load', () =>
    { 
        setPhoto(data.result);
    })

    data.readAsDataURL(e.target.files[0])

  };


  const handleAddData = (e) =>{
    try{

      e.preventDefault();
      const usersRef = ref(database,'users');

     /* The Push() method generates a unique key every time a new child is added to the specified Firebase reference*/

      const newDataRef = push(usersRef);
      set(newDataRef,{
        Fname: Fname,
        Lname: Lname,
        contact: contact,
        photo: photo,
      });

      setFname("");
      setLname("");
      setContact("");
      setPhoto("");

      alert("data inserted ");

    } catch (error)
    {
      console.error 
    }
    
  }

  return (
    <div>
      <br></br><h1 className='text-center'>Enquiry Page</h1>

      <form className="login">

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

   <input type="file" placeholder="upload your photo"
    
   onChange = {handleChange}
  />

  

     <input type ="submit" value ="Submit" onClick={handleAddData} />        

     </form>
    </div>
  )
}

export default Enquiry;
