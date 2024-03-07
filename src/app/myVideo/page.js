"use client"
import React from 'react'
import ReactPlayer from "react-player";

export default function Video() {

    //https://www.youtube.com/watch?v=mEsleV16qdo&ab_channel=freeCodeCamp.org

    //https://media.w3.org/2010/05/sintel/trailer_hd.mp4

    let videosrc = "https://www.youtube.com/watch?v=mEsleV16qdo&ab_channel=freeCodeCamp.org";
  
   
  

    return (
      <div>
        <h1>my custome player</h1>
        <ReactPlayer
          width="500px"
          height="500px"
          url={videosrc}
          controls={true}
          // light is usefull incase of dark mode
          light={false}
          // picture in picture
          pip={true}
        />
        <source src={videosrc} type="video/mp4" />
      </div>
    );
  
}
