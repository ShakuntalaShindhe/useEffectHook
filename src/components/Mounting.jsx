import React, { useEffect } from 'react'

const Mounting = () => {
    useEffect(()=>{
        console.log('Component Mounting')
    },[])
  return (
    <div>
      <h4>Component mounting</h4>
      <p>Example of component mounting with empty dependenvy array</p>
    </div>
  )
}

export default Mounting
