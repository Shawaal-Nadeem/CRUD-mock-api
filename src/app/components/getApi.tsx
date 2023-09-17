'use client'
import { useState,useEffect } from 'react'

export const GetApi = () => {
    const [state, setState] = useState([{}]);
    useEffect(() => {
        
        const getApi = async () => {
            const api = await fetch('https://65054b57ef808d3c66efe2ce.mockapi.io/todos/api/todos-data');
            const json = await api.json();
            setState(json);
        }
        getApi();
    },[])
   
    return (
        <div className=' w-full mt-20'>
            {state.map((parameter: any,index: number) => {
                return (
            <div key={index} className=' flex justify-around items-center'>
            <p className=' w-[10%]'>{parameter.id}</p>
            <p className=' w-[50%]'>{parameter.title}</p>
            {parameter.completed===true?<p className=' w-[20%]'>True</p>:<p className=' w-[20%]'>False</p>}
            </div> 
                    )
                })}
        </div>
    )
}