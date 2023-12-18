import React from 'react'

const Child = () => {
    const h2 = {
        color:"seagreen",
        fontSize:"50px",
        textAlign:"center",
    }
  return (
    <>
    <div>
         <h2 style={h2}>Child Components </h2></div>
    </>
  )
}

export default Child;