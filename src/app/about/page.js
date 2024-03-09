import Link from "next/link"


export default function About(){
  return (
    <>
    <div><br></br><h1 className="text-center">About Page</h1></div>
    <Link href ="/about/aboutstudent" className="bg-red-400">About Student</Link>
    </>
  )
}
