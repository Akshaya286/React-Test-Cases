import React, { useState } from 'react'

function Button() {
    const [value, setValue] = useState("Press here")

    const handleClick=()=>{
        setValue("You Clicked")
    }
  return (
    <div>
        <button onClick={handleClick} title="dummyButton">{value}</button>
    </div>
  )
}

export default Button