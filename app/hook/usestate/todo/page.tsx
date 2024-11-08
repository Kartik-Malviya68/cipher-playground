'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useId, useState } from 'react'






function page() {


    const [list, setList] = useState<Array<{ id: number, value: string }>>(
        () => {
            const storedList = localStorage.getItem('list');
            try {
                return storedList ? JSON.parse(storedList) : [];  // Parse if data exists, else return empty array
            } catch (e) {
                console.error("Error parsing stored list:", e);
                return [];
            }
        }
    )

    const [value, setValue] = useState<string>('')
    console.log(list)


    const handleInput = (v: React.ChangeEvent<HTMLInputElement>) => {
        setValue(v.target.value)
    }

    const deleteTodo = (id: number) => {
        setList((prev) => prev.filter(v => v.id !== id))
    }



    useEffect(() => {
        window.localStorage.setItem('list', JSON.stringify(list))
    }, [list])




    const AddTodo = () => {
        setList([

            {
                id: Math.floor(Math.random() * 100000000),
                value: value
            },

            ...list,

        ])
    }



    return (
        <div className='flex items-center flex-col my-auto h-screen gap-4 justify-center'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                To-Do List
            </h1>
            <div className='border w-[450px] border-gray-200 p-4 flex flex-col gap-4 rounded-md bg-slate-50'>
                <div className='flex gap-4 w-full'>
                    <Input onChange={handleInput} />
                    <Button onClick={AddTodo}>Add</Button>
                </div>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {list?.map((v) => (
                        <li className='cursor-pointer' onClick={() => deleteTodo(v.id)} key={v.id}>{v.value}</li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default page