import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RickMortyApi = () => {
    const[data,setData]=useState([])
    const[isLoading,setIsloading]=useState(true)
    useEffect(()=>{
       axios.get('https://rickandmortyapi.com/api/character')
       .then((resp)=>{
        setData(resp.data.results)
        setIsloading(false)
       })
       .catch((err)=>{
        console.log('Error',err)
        setIsloading(false)
       })

    },[])
  return (
    <div>
      <h4>Fetch Data using rick morty api</h4>
      {isLoading ?(
       <p>Data is Loading.</p>
      ):(
        <div>
        {data.map((item,index)=>(
            <div key={index}>
                <h4>{item.name}</h4>
                <p>{item.status}</p>
                <img src={item.image} />

            </div>
        ))}
       </div>
      )}
    </div>
  )
}

export default RickMortyApi
