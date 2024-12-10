// import { Button, Row } from "antd";
// import { FieldValues } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { setUser, TUser } from "../redux/features/auth/authSlice";
// import { verifyToken } from "../utils/verifyToken";
// import { useLoginMutation } from "../redux/features/auth/authApi";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import CommonForm from "../components/form/CommonForm";
// import CommonInput from "../components/form/CommonInput";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [login] = useLoginMutation();
//   const onSubmit = async (data: FieldValues) => {
//     const tostId = toast.loading("logging in...");
//     try {
//       const userInfo = {
//         email: data.email,
//         password: data.password,
//       };
//       const res = await login(userInfo).unwrap();
//       console.log(res);
//       const user = verifyToken(res.data.accessToken) as TUser;
//       console.log(user);
//       dispatch(setUser({ user, token: res.data.accessToken }));
//       toast.success("Login successful", { id: tostId, duration: 2000 });
//       navigate(`/${user.role}/dashboard`);
//     } catch (error) {
//       toast.error("something went wrong.", { id: tostId, duration: 2000 });
//     }
//   };

//   const defaultValues = {
//     // email: "forhad@gmail.com",
//     // password: "admin123",
//   };
//   return (
//     <Row justify="center" align="middle" style={{ marginTop:"80px"}}>
//       <CommonForm onSubmit={onSubmit} defaultValues={defaultValues}>
//         <CommonInput type="text" name="email" label="Email" />
//         <CommonInput type="text" name="password" label="Password" />
//         <Row justify="space-between" style={{ gap: 20 }}>
//           <Button htmlType="submit">Login</Button>
//         </Row>
//       </CommonForm>
//     </Row>
//   );
// };

// export default Login;





"use client"

import { useState } from 'react'

import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'


export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would make an API call here to authenticate the user
    console.log('Logging in with:', { email, password })
    // Redirect to dashboard after successful login
    navigate('/dashboard')
  }

  return (

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300"
            >
              Login
            </button>
          </form>
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

