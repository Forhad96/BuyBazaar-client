import { z } from "zod";
// Define the schema for your form data
export const registerSchema = z
  .object(
    
    
    
    {
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    profilePicture: z.string().optional(),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters"),
      role: z.enum(["VENDOR", "CUSTOMER"]).optional(),
      //shop details
    shopName: z.string().min(1, "Name is required").optional(),
    description: z.string().optional(),
    shopLogo: z.string().optional(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // This will point the error to the confirmPassword field

    



  }


);


// Define the schema for your form data
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
