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
    email: z.string().email("Email incorrect kaa dude"),
    password: z.string().min(6, "6 digits Jaaa"),
})
