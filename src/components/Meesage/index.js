import React from 'react'
import "./message.css"

const Message = ({ text }) => {
  return (
    <div className='messageMain'>
      {text}
    </div>
  )
}

export default Message
