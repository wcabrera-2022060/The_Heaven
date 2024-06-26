import { useState } from 'react'
import { registerRequest } from '../services/api.js'
import toast from 'react-hot-toast'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)

  const register = async (data) => {
    setIsLoading(true)
    const res = await registerRequest(data)
    setIsLoading(false)

    if (res.err) {
      toast.error(
        res.error?.response?.data?.message ||
        'Error registering'
      )
    }

    if (!res.err) {
      toast.success(
        res.data?.message
      )
    }
  }

  return {
    register,
    isLoading
  }
}
