"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
  }

  let renderTask = <h2>No Task Available</h2>
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todolist</h1>

      <form onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded' placeholder='Enter Title here' value={title} onChange={(e) => {
          settitle(e.target.value)
        }} />
        <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded' placeholder='Enter Description here' value={desc} onChange={(e) => {
          setdesc(e.target.value)
        }} />
        <button className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded'>Add Task</button>
      </form>

      <hr />

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page