import React, { useState } from 'react'
import axios from 'axios';

export const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/register",
                {name, email, password}
            );
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    }
        
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='shadow p-6 w-80 bg-white'>
            <h2 className='text-2xl font-bold mb-4'>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block' htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        className='w-full px-3 py-2 border'
                        id="name" 
                        placeholder='Enter Name' 
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block' htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-3 py-2 border'
                        id="email" 
                        placeholder='Enter Email' 
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block' htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-3 py-2 border'
                        id="password" 
                        placeholder='*********' 
                        required
                    />
                </div>
                <div className='mb-4'>
                    <button 
                        type="submit"
                        className='w-full bg-teal-600 text-white py-2'
                    >
                        Signup
                    </button>
                    <p className='text-center'> 
                        already have an acount ? <a href="">Login</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}
