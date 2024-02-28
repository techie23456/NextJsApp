import Link from 'next/link'
import React from 'react'
Link
export default function AboutStudent() {
  return (
    <>
    <div><h1>About student Page</h1></div>
    <Link href = "/about" className="bg-red-300">About</Link>
    </>
  )
}
