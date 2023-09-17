'use client'
import { useEffect } from "react"
export const UpdateApi = () => {
    const updateObj = async () => {
        const api = await fetch('https://65054b57ef808d3c66efe2ce.mockapi.io/todos/api/todos-data/10', {
        method:'PUT',
        body: JSON.stringify({
        title:'Harry Potter',
        completed:false
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        
    })    
    }
    updateObj();
    return (
        <div></div>
    )
}