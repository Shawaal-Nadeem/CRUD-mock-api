'use client'
import {useEffect} from 'react'
export const DeleteApi = () => {
    useEffect(() => {
        
        const deleteApi = async () => {
            const respApi = await fetch('https://65054b57ef808d3c66efe2ce.mockapi.io/todos/api/todos-data/10', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
            });
            
        }
        deleteApi();
    },[])
    return (
        <div></div>
    )
}