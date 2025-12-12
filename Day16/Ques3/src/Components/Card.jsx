import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className="message">
      {props.message}
    </div>
  )
}

export default Card
