import React, { useEffect } from 'react'
import { useState } from 'react';
import  axios  from 'axios';

const Fetsc = () => {

  const [data,setData] = useState([])

   const getdata = ()=>{
     axios.get("http://localhost:8081/").then((res)=>{
        // console.log(data)

        
     })
   }

   useEffect(() => {
     getdata()
   }, 
   [])
  return (
    <div>
      
    </div>
  )
}

export default Fetsc
