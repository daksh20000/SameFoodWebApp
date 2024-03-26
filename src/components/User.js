import React, { useState } from 'react'

const User = () => {
  const[count, setCount] = useState(0)
  return (
    <div className='user-card'>
        
        <h2>Count: {count} </h2>
        <h2>Name : </h2>
        <h2>Location : </h2>
        <h2>Contact : </h2>
    </div>
  )
}

export default User