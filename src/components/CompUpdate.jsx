import React, { useEffect, useState } from 'react'

const CompUpdate = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`count value ${count}`)
    },[count])
  return (
    <div>
      <h4>Example of Component Upadating</h4>
      <p>Current Count:{count}</p> 
      <button onClick={()=>setCount(count+1)}>Incre</button>   
      </div>
  )
}

export default CompUpdate
