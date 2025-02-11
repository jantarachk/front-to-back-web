import { create } from "zustand"
import { actionLogin } from "../api/auth"
import { persist } from "zustand/middleware"

//Step 1 - Create Store
const authStore = (set) => ({
    user: [],
    token: null,
    actionLoginWithZustand: async (value) => { 
        try {
            const res = await actionLogin(value)
            // console.log("Hello,zustanddd", res)
            // console.log("res.data.payload =", res.data.payload)
            // console.log("res.data.token=", res.data.token)
            const { payload, token } = res.data
            // console.log(payload)
            // console.log(token)

            set({ user: payload, token: token })
            return { success: true, role: payload.role}

        } catch (error) {
            // console.log(error.response.data.message)
            return { success: false, error: error.response.data.message}
        }
     }
})

//Step 2 - Exports Store

const useAuthStore = create(persist(authStore, 
    {name:'auth-store'}));

export default useAuthStore