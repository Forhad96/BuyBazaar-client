import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { TResponse, TUserResponseData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
// Define the schema for your form data
// Define the schema for your form data
// Define the schema for your form data
const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // This will point the error to the confirmPassword field
  });

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });
  const [signup] = useSignUpMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Define the schema for your form data

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading...");
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    formData.append("file", data.image);
    try {
      const res = (await signup(formData)) as TResponse<TUserResponseData>;

      if (res.error?.data.success === false) {
        toast.error(res.error?.data.message, { id: toastId, duration: 2000 });
      } else {
        toast.success("Registration successful", {
          id: toastId,
          duration: 2000,
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.name && typeof errors.name.message === "string" && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.email && typeof errors.email.message === "string" && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
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
            {errors.password && typeof errors.password.message === "string" && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.confirmPassword &&
              typeof errors.confirmPassword.message === "string" && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
