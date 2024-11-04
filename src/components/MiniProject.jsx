import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MiniProject = () => {
    const[product,setProduct]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((resp)=>{
            setProduct(resp.data.products)
        })
        .catch(err=>console.log('Error if fetching the products',err))
    },[])
  return (
    <div className='conatainer'>
      <h1 className='product'>Product details</h1>
      <div className='card-grid'>
      {product.map((item,index)=>(
        <div key={index.id} className='card'>
                <img src={item.thumbnail} className='image' />
            <div className='info'>
                <h3 className='title'>{item.title}</h3>
                <p className='desc'>{item.description}</p>
                <p className='price'>${item.price}</p>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MiniProject
