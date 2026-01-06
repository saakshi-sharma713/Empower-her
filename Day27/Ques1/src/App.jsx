import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeedbackForm from './Components/FeedbackForm'
import SlideShowApp from './components/SlideShowApp'
import Todoapp from './components/Todoapp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <FeedbackForm/>
   <h1 className='mb-4 text-3xl'>Carousal</h1>
   <SlideShowApp/>
   <h1 className='mb-4 text-3xl mt-5'>Todo App</h1>
   <Todoapp/>
    </>
  )
}

export default App
