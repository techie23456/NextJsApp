'use client'

import { get, ref} from 'firebase/database';
import {useEffect, useState} from 'react';
import { database } from '../firebaseConfig';

export default function Home() 
{

const [users, setUsers] = useState([]);

useEffect(() => {
 
const usersRef = ref(database, 'users')

get(usersRef).then((snapshot) => {

if (snapshot.exists()){

const usersArray = Object.entries(snapshot.val()).map(([id, data]) =>({
id,
...data,

}));

setUsers(usersArray);

}
else{   console.log("no data available");
}

}).catch((error)=>{    
 
      console.error(error);

})
},[])

return (
<div className="container mx-auto">
<h1 className='text-4xl font-bold text-center my-10'>Fetch Data From Realtime DB</h1>
<div className='grid grid-cols-4 gap-4'>
{ users.map((user) => (
<div key={user.id} className='bg-gray-10@ p-4 rounded-1lg'>{console.log(user.photo)}
<img src ={user.photo} width="400" height="400" />      
<h2 className='text-2x1 text-gray-900'>{user.Fname}</h2>
<h2 className='text-2x1 text-gray-900'>{user.Lname}</h2>
<h2 className='text-2x1 text-gray-900'>{user.contact}</h2>
{/* <h2 className='text-2x1 text-gray-900'>{user.mail}</h2> */}

<p className='text-gray-600'>{user.subtitle}</p>
</div>))}
</div>
</div>

)
}



