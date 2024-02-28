"use client"
import React from 'react'

export default function StudentDetails({params}) {
  return (
    <>
    <div>Student Details</div>
    <h1>Name : {params.student}</h1>
    </>
  )
}
