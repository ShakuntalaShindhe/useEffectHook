import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchUrl=async()=>{
            try{
                const resp=await fetch('https://jsonplaceholder.typicode.com/posts')
                const result=await resp.json()
                setData(result)
            }
            catch(err){
                console.log('Error',err)
            }
        }
        fetchUrl()
    },[])
  return (
    <div>
      <h4>API fetching with fetch method</h4>
      <ul>
        {data.map((key,index)=>(
            <li key={index}>
                <h5>{key.id}</h5>
                <h4>{key.title}</h4>
                <p>{key.body}</p>
            </li>
        ))}
      </ul>

    </div>
  )
}

export default FetchApi
