import React, { useEffect, useState } from 'react'

const Example1 = () => {
    const[number,setNumber]=useState(0);
    const[str,setStr]=useState('')
    const[msg,setMsg]=useState('')

    //component mount
    /*useEffect(()=>{
        setNumber(34)
        setStr('New value')
    },[])*/

    //component update
    useEffect(()=>{
        setMsg(`Number is ${number} and string ${str}`)
    },[number,str])
    const handleNum=()=>{
        setNumber(number+1)
    }
    const handleStr=()=>{
        setStr('Updated value')
    }
  return (
    <div>
      <h4>Componet mount</h4>
      <p>Number:{number}</p>
      <p>String:{str}</p>

      <button onClick={handleNum}>Click</button>
      <button onClick={handleStr}>Click</button>      
      
    </div>
  )
}

export default Example1
