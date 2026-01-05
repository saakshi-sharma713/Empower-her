import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mini from './Pages/mini'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button class='bg-gray-200 border-1 rounded py-2 px-4 hover:bg-gray-300 active:bg-gray-600'>Hello</button>
     <img class="border-1 rounded-3xl shadow-2xl hover:scale-105"
     width="300" src="https://th.bing.com/th/id/OIP.B48GIfsNVKZyQrnMorCipwHaFj?w=210&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" />
     <h2 class="text-xl md:text-3xl lg:text-5xl font-bold">Responsive text</h2>
    <br/> <br/>
    <ul className="list-disc list-inside pl-5">
  <li className="hover:text-blue-600 cursor-pointer">HTML</li>
  <li className="hover:text-blue-600 cursor-pointer">CSS</li>
  <li className="hover:text-blue-600 cursor-pointer">JavaScript</li>
  <li className="hover:text-blue-600 cursor-pointer">React</li>
</ul>

<div className="flex flex-col items-center bg-rose-100 text-slate-900 px-4 py-5 max-w-sm gap-3 rounded-2xl shadow-xl">

  <img className="rounded-2xl w-sm" width="100" src="https://th.bing.com/th/id/OIP.B48GIfsNVKZyQrnMorCipwHaFj?w=210&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"/>
  <h3 class="font-light"><span class="font-medium">Title : </span>Red Flower</h3>
  <h3 class="font-light"><span class="font-medium">Description : </span> Lorem ipsum, dolor sit amet consectetsaepe quae tempora explicabo recusandae ducimus repellendus laborum hic voluptates? Recusandae itaque doloribus quod! Sed.</h3>
   <button className="bg-[#ffffff] text-sm py-2 px-4 rounded-xl  hover:bg-rose-600 transition">
  Click me
</button>

</div>


<table className="border border-gray-300 w-full border-collapse">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2">Name</th>
      <th className="border border-gray-300 px-4 py-2">Course</th>
      <th className="border border-gray-300 px-4 py-2">Status</th>
    </tr>
  </thead>

  <tbody>
    <tr className="odd:bg-gray-100 even:bg-white hover:bg-blue-100 transition">
      <td className="border border-gray-300 px-4 py-2">Amit</td>
      <td className="border border-gray-300 px-4 py-2">HTML</td>
      <td className="border border-gray-300 px-4 py-2">Completed</td>
    </tr>

    <tr className="odd:bg-gray-100 even:bg-white hover:bg-blue-100 transition">
      <td className="border border-gray-300 px-4 py-2">Neha</td>
      <td className="border border-gray-300 px-4 py-2">CSS</td>
      <td className="border border-gray-300 px-4 py-2">In Progress</td>
    </tr>

    <tr className="odd:bg-gray-100 even:bg-white hover:bg-blue-100 transition">
      <td className="border border-gray-300 px-4 py-2">Ravi</td>
      <td className="border border-gray-300 px-4 py-2">JavaScript</td>
      <td className="border border-gray-300 px-4 py-2">Pending</td>
    </tr>

    <tr className="odd:bg-gray-100 even:bg-white hover:bg-blue-100 transition">
      <td className="border border-gray-300 px-4 py-2">Sita</td>
      <td className="border border-gray-300 px-4 py-2">React</td>
      <td className="border border-gray-300 px-4 py-2">Completed</td>
    </tr>
  </tbody>
</table>
<br/> <br/>
<input class="py-2 px-5 rounded-xl focus:outline-rose-500 mb-2 border-2 border-cyan-100"type="text" placeholder="Enter name"/> <br/>
<input class="py-2 px-5 rounded-xl focus:outline-rose-500 mb-2 border-2 border-cyan-100" type="email" placeholder="Enter email"/><br/>
<input class="py-2 px-5 rounded-xl focus:outline-rose-500 mb-2 border-2 border-cyan-100" type="password"  placeholder="Enter password" />

<br/> <br/>
<nav className="bg-teal-800 text-white flex flex-col md:flex-row justify-between items-center h-auto md:h-16 py-4 px-4 text-2xl">
  <a href="#" className="mb-3 md:mb-0 font-semibold">
    Logo
  </a>

  <div className="flex flex-col md:flex-row md:space-x-6 gap-3 md:gap-0">
    <a href="#" className="hover:text-teal-200 transition">Home</a>
    <a href="#" className="hover:text-teal-200 transition">About</a>
  </div>
</nav>
<br/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-gray-100 p-4 rounded-xl shadow">Card 1</div>
  <div className="bg-gray-100 p-4 rounded-xl shadow">Card 2</div>
  <div className="bg-gray-100 p-4 rounded-xl shadow">Card 3</div>
  <div className="bg-gray-100 p-4 rounded-xl shadow">Card 4</div>
  <div className="bg-gray-100 p-4 rounded-xl shadow">Card 5</div>
  <div className="bg-gray-100 p-4 rounded-xl shadow">Card 6</div>
</div> <br/> <br/>

<h1 className='text-4xl mb-5'>Mini Page</h1>
<Mini/>
</>
  )
}

export default App
