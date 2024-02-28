import Link from 'next/link'
import React from 'react'

export default function studentList() {

    const arr = ["Anil","Amar","Arun","Akshay","Avinash"]
  return (
    <>
    <div>Student List</div>
    <ul>
    { arr.map((item,i)=>{

     return  <li><Link href ={`/studentList/${item}`}>{item}</Link></li>

     })
    } 
    </ul>
    </>
  )
}
