import React from 'react'
import Link from "next/link"
export default function Study() {
  return (
    <div>
    <div>All lectutes day wise</div>

    <Link href="study/day1/lecture1/image1">Introduction</Link><br></br>
    <Link href="study/day1/lecture2/image1">Day1</Link><br></br>
    <Link href="study/day2/lecture3/image1">Day2</Link><br></br>
    <Link href="study/day3/lecture4/image1">Day3</Link><br></br>
    <Link href="study/day4/lecture5/image1">Day4</Link><br></br>
    <Link href="study/day5/lecture6/image1">Day5</Link><br></br>
    </div>
  )
}
