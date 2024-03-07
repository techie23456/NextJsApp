"use client"

export default function Lecture({params}) {
   

   console.log(">>>>>$$$$$>>>>",`"${params.lectures[2]}"`)
  return (
    <>
    <div><h1>{params.lectures[0]}</h1></div>
    <div><h1>{params.lectures[1]}</h1></div>
   

    </>
  )
}
