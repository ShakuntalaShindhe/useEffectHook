import React, { useEffect, useState } from 'react'

const CompWillMount = () => {
    const[count,setCount]=useState(0)

    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((prevCount)=>prevCount+1)
        },1000)
        console.log('Timer Started')
        return()=>{
            clearInterval(timer)
            console.log('timer stopped')
        }
       
    })
  return (
    <div>
      <h4>Example of Component Unmount</h4>
      <p>Counter value:{count}</p>
    </div>
  )
}

export default CompWillMount
