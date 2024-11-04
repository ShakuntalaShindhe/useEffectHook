import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosApi = () => {
    const[data,setData]=useState([])
    const[isLoading,setIsloading]=useState(true)
    useEffect(()=>{
        // setIsloading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp=>{
            setData(resp.data)
            setIsloading(false)
         })
        .catch(err=>{
            console.log('Error',err)
            setIsloading(false)
    })
    },[])
  return (
    <div>
      <h4>Fetching the api with axios</h4>
      {isLoading ?(
        <p>Data is Loading</p>
          
      ):(
        <ul>
        {data.map((item,index)=>(
            <li key={index}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </li>
        ))}
      </ul>
      )}
    </div>
  )
}

export default AxiosApi
