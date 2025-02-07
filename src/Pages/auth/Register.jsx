

//SHOW original way before moving to REACT-HOOK-FORM




import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { createAlert } from '../../Utils/createAlert'

function Register() {

  const [value, setValue] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword:''
  })

  const hdlOnChange = (e) => {
    setValue({
      ...value, 
      [e.target.name]: e.target.value
    })
  }
  
  const hdlSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/register',value)
      console.log(res)
      createAlert("success","Register Success")
    } catch (error) {
      createAlert("info", error.response.data.message)
      console.log(error)
    }
    console.log(value)

  }


  return (
    <div className='flex w-full h-full justify-center p-10'>
      <div className='w-64 border p-4 rounded-2xl'>
        <h1 className='text-xl font-bold text-center'> Register </h1>
        <form onSubmit={hdlSubmit}>
          <div className='flex flex-col gap-2 py-4'>
            <input 
              className='border w-full border-amber-950 rounded-md p1 px-4 py-1'
              placeholder='Email'
              type='text'
              name='email'
              onChange={hdlOnChange}
              />
            <input 
              className='border w-full border-amber-950 rounded-md p1 px-4 py-1'
              placeholder='Firstname'
              type='text'
              name='firstName'
              onChange={hdlOnChange}
              />
            <input 
              className='border w-full border-amber-950 rounded-md p1 px-4 py-1'
              placeholder='Lastname'
              type='text'
              name='lastName'
              onChange={hdlOnChange}
              />
            <input 
              className='border w-full border-amber-950 rounded-md p1 px-4 py-1'
              placeholder='Password'
              type='text'
              name='password'
              onChange={hdlOnChange}
              />
            <input 
              className='border w-full border-amber-950 rounded-md p1 px-4 py-1'
              placeholder='Confirm Password'
              type='text'
              name='confirmPassword'
              onChange={hdlOnChange}
              />
            
          </div>
          <div className='flex justify-center'>
            <button className='bg-blue-600 text-white p-3 rounded-md hover:cursor-pointer'>
              Register
            </button>
          </div>
        </form>
      
      </div>
    </div>
  )
}

export default Register