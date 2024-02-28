"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Home() {

  const route = useRouter();

  const navigate = (name)=>{
    route.push(name)
  }
  return (

   
    <>
    <div><h1>Main Menu</h1></div>
    <Link className="bg-red-400" href = "/about">About</Link><br></br>
    <button className="bg-red-400" onClick={()=>navigate("/about")}>About</button>
    </>
  )
}
