import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { createAlert } from '../../Utils/createAlert'
import { useForm } from "react-hook-form"
import FormInput from '../../components/forms/FormInput'
import Buttons from '../../components/forms/Buttons'

//Validatos
import { registerSchema } from '../../Utils/validator'
import { zodResolver } from "@hookform/resolvers/zod"

function Register1() {
    const { register,handleSubmit,formState } = useForm({
        resolver: zodResolver(registerSchema)
    })
        const { isSubmitting,errors } = formState
        console.log(errors)
        console.log(isSubmitting)
  
  
  const hdlSubmit = async (value) => {

    //Set time out ไว้ดู loading status เฉยๆ เพราะตอนนี้ทำบนเครื่องเองจะเร็วมาก ดู now loading ไม่่ทัน
    await new Promise((resolve)=> setTimeout(resolve,3000))

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
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className='flex flex-col gap-2 py-4'>
            <FormInput register={register} name="email"/>
            <FormInput register={register} name="firstName"/>
            <FormInput register={register} name="lastName"/>
            <FormInput register={register} name="password"/>
            <FormInput register={register} name="confirmPassword"/>
            
          </div>
          <div className='flex justify-center'>
            <Buttons isSubmitting={isSubmitting} label="Register"/>
          </div>
        </form>
      
      </div>
    </div>
  )
}

export default Register1