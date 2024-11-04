import React, { useEffect, useState } from 'react'

const PromiseChaining = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(respo=>respo.json())
        .then(result=>setData(result))
        .catch(err=>console.log('Error',err))
    },[])
  return (
    <div>
      <h4>Example of API with promise chaining</h4>
      {data.map((val,i)=>(
       <div key={i}>
        {/* <p>{val.id}</p> */}
        <h5>{val.title}</h5>
        <p>{val.completed.toString()}</p>
       </div>
      ))}
    </div>
  )
}

export default PromiseChaining
