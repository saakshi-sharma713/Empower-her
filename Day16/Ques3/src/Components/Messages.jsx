import React from 'react'
import Card from './Card';

const Messages = () => {
    const messages = [
  "Hello! Welcome to our website.",
  "Remember to check your notifications.",
  "Have a great day ahead!",
  "Don't forget to save your work."
];

  return (
    <div>
      {messages.map((val)=>{
    return <Card message={val}/>
      })}
    </div>
  )
}

export default Messages
