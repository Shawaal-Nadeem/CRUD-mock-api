'use client'
import {useEffect} from 'react'
export const PostApi = () => {
    useEffect(() => {
        
        const postApi = async () => {
            const respApi = await fetch('https://65054b57ef808d3c66efe2ce.mockapi.io/todos/api/todos-data', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'Poor Dad n Rich Dad',
                    completed:true
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
            });
            
        }
        postApi();
    },[])
    return (
        <div></div>
    )
}