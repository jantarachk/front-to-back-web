import { z } from "zod"

// Test Validator
export const registerSchema = z.object({
    email: z.string().email("Email incorrect kaa"),
    firstName: z.string().min(3,"Firstname > 3"),
    lastName: z.string().min(3, "Lastname > 3"),
    password: z.string().min(6, "Password 6 digits"),
    confirmPassword: z.string().min(6, "Password 6 digits Jaaaa")
}).refine((data)=> data.password === data.confirmPassword, {
    message: "Password not match dude",
    path: ["confirmPassword"]
})

export const loginSchema = z.object({
    email: z.string().email("รู้จัก email รึป่าวจ้ะว่าต้องพิมพ์ยังไง"),
    password: z.string().min(6, "6 ตัวจ้าาาาาาา"),
})


export const validateWithZod = (schema) => (req,res,next) =>{
    try {
        console.log("Hello Middleware")
        schema.parse(req.body)
        next()
    } catch (error) {
        const errMsg = error.errors.map( el => el.message )
        const errTxt = errMsg.join(",")
        const mergeError = new Error(errTxt)
        next(mergeError)
    }
}

