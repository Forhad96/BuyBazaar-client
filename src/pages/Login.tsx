

import { useState } from 'react'

import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ReusableFormInput from '@/components/form/ReusableFormInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { loginSchema } from '@/schemas'
import { toast } from 'sonner'
import { useLoginMutation } from '@/redux/features/auth/authApi'
import { Form } from '@/components/ui/form'
import { TResponse, TUserLoginResponse } from '@/types'


export default function LoginPage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email:"forhad@gmail.com",
      password: "12345678",
    },
  });
  const [login]= useLoginMutation()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  async function onSubmit(data: z.infer<typeof loginSchema>) {
    // console.log(data);
    const toastId = toast.loading("logging in...");

    try {
      const res = (await login(data)) as TResponse<TUserLoginResponse>;

      if (res.error?.data.success === false) {
        toast.error(res.error?.data.message, { id: toastId, duration: 2000 });
      } else {
        toast.success("Login successful", {
          id: toastId,
          duration: 2000,
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error);
    }
  }
  return (

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ReusableFormInput
              control={form.control}
              name="email"
              label="Email"
            />

            <div className="relative">
              <ReusableFormInput
                control={form.control}
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                className="absolute inset-y-12 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>



      
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-purple-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>

  )
}

