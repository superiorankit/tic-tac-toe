import React from 'react'
import "./box.css"

const Box = ({text,updateValue,index,turn}) => {
  return (
    <div className='boxMain' onClick={()=>updateValue(index,turn)}>
{text}
    </div>
  )
}

export default Box
