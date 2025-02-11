import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { createAlert } from '../../Utils/createAlert'
import { useForm } from "react-hook-form"
import FormInput from '../../components/forms/FormInput'
import Buttons from '../../components/forms/Buttons'
import { useNavigate } from 'react-router'

//Validators
import { loginSchema } from '../../Utils/validator'
import { zodResolver } from "@hookform/resolvers/zod"
import { actionLogin } from '../../api/auth'
import useAuthStore from '../../store/auth-store'

function Login() {

    // JS - Zustand
    const actionLoginWithZustand = useAuthStore((state)=>state.actionLoginWithZustand)
    



    const navigate = useNavigate()
    const { register,handleSubmit,formState,reset } = useForm({
        resolver: zodResolver(loginSchema)
    })
        const { isSubmitting,errors } = formState
        // console.log(errors)
        // console.log(isSubmitting)
        
        const roleRedirect = (role) => {
          if(role === 'ADMIN'){
            console.log("I saw ADMIN")
            navigate('/admin')
          } else {
            console.log("I saw USER")
            navigate('/user')
          }
        }
  
  const hdlSubmit = async (value) => {

    // //Set time out ไว้ดู loading status เฉยๆ เพราะตอนนี้ทำบนเครื่องเองจะเร็วมาก ดู now loading ไม่่ทัน
    // await new Promise((resolve)=> setTimeout(resolve,3000))

    try {

      const res = await actionLoginWithZustand(value)
      console.log(res)
      if (res.success) {
        roleRedirect(res.role)
        reset()
        createAlert("success", "welcome back")
      } else {
        createAlert("info", "Something wrong")
      }

      //ยัดก้อนข้างล่างนี้เอาไปใส่ใน actionLoginWithZustand
      // const res = await actionLogin(value)
      // console.log("res.data=", res.data)
      // const role = res.data.payload.role
      // console.log(role)

      // roleRedirect(role)
      // // reset()
      // createAlert("success","Login Success")

    } catch (error) {
      console.log(error)
      createAlert("info", error.response?.data?.message)
      // console.log(error.response?.data?.message)
    }
    


  }


  return (
    <div className='flex w-full h-full justify-center p-10'>
      <div className='w-64 border p-4 rounded-2xl'>
        <h1 className='text-xl font-bold text-center'> Login </h1>
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className='flex flex-col gap-2 py-4'>
            <FormInput register={register} name="email" errors={errors}/>
            <FormInput register={register} name="password" errors={errors} type="password"/>
            
          </div>
          <div className='flex justify-center'>
            <Buttons isSubmitting={isSubmitting} label="Login"/>
          </div>
        </form>
      
      </div>
    </div>
  )
}

export default Login