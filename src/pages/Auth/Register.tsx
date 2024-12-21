/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { TResponse, TUserResponseData } from "@/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import ReusableFormInput from "@/components/form/ReusableFormInput";

export default function RegisterPage() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "Forhad hossain",
      email: "forhad@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
      shopName: "Shop Name",
    },
  });
  const [register] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVendor, setIsVendor] = useState(false);
  const navigate = useNavigate();
  async function onSubmit(data: z.infer<typeof registerSchema>) {
    // console.log(data);
    if(isVendor){
      data.role = "VENDOR"
    }
    const toastId = toast.loading("loading...");
    const { profilePicture, shopLogo, ...rest } = data;
    const formData = new FormData();
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }
    if (shopLogo) {
      formData.append("shopLogo", shopLogo);
    }
    formData.append("data", JSON.stringify(rest));
    // console.log("Form Data: ", Object.fromEntries(formData));
    // console.log(formData.get("shopLogo"));


    // console.log(data);
    // return
    try {
      const res = (await register(formData)) as TResponse<TUserResponseData>;

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
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ReusableFormInput
              control={form.control}
              name="name"
              label="Name"
            />
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
            <div className="relative">
              <ReusableFormInput
                control={form.control}
                name="confirmPassword"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
              />

              <button
                type="button"
                className="absolute inset-y-12 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>

            {isVendor && (
              <>
                <ReusableFormInput
                  control={form.control}
                  name="shopName"
                  label="Shop Name"
                />
                <ReusableFormInput
                  control={form.control}
                  name="description"
                  label="Description (optional)"
                />
                {/* <ReusableFormInput
                  control={form.control}
                  name="shopLogo"
                  label="Shop Image (optional)"
                  type={"file"}
                /> */}
              </>
            )}
            {/* <FormField
              control={form.control}
              name="profilePicture"
              render={({ field:{onChange,value,...field} }) => (
                <FormItem>
                  <FormLabel>Profile Picture</FormLabel>
                  <FormControl>
                    <Input placeholder="Profile Picture" type="file" value={value?.fileName} {...field} onChange={(e) => onChange(e.target.files?.[0])} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* 
            <ReusableFormInput
              control={form.control}
              name="profilePicture"
              label=" Profile Picture (optional)"
              type={"file"}
            /> */}
            <div className="flex items-center space-x-2">
              <Switch
                checked={isVendor}
                onClick={() => setIsVendor(!isVendor)}
                id="vendor-mode"
              />
              <Label htmlFor="vendor-mode">Register as a vendor</Label>
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>

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
