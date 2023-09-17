'use client'
import { useState } from 'react'
import { GetApi } from './components/getApi'
import { PostApi } from './components/postApi'
import { UpdateApi } from './components/updateApi'
import { DeleteApi } from './components/deleteApi'

export default function App() {
 
  const [state,setState]=useState('')
  return (
    <div className=" w-full ">
      <div className=" mt-5 flex justify-around">
        <button onClick={()=>{setState('get')}} className=" bg-[green] text-[white] w-32 h-10 rounded-lg">Get</button>
        <button onClick={()=>{setState('post')}} className=" bg-[blue] text-[white] w-32 h-10 rounded-lg">Post</button>
        <button onClick={()=>{setState('update')}} className=" bg-[gray] text-[white] w-32 h-10 rounded-lg">Update</button>
        <button onClick={()=>{setState('delete')}} className=" bg-[red] text-[white] w-32 h-10 rounded-lg">Delete</button>
      </div>
      {state === 'get' ? <GetApi /> : null}
      {state === 'post' ? <PostApi /> : null}
      {state === 'update' ? <UpdateApi /> : null}
      {state==='delete'?<DeleteApi/>:null}
    </div>
  )
}
