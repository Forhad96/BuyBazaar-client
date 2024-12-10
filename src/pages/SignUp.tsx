/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Form, Row, notification } from "antd";
import CommonForm from "../components/form/CommonForm";
import CommonInput from "../components/form/CommonInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import Link from "antd/es/typography/Link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

// Define validation schema using Zod
const signUpSchema = z
  .object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Please enter a valid email"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't exceed 15 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    cPassword: z.string(),
  })
  .superRefine((data, context) => {
    if (data.password !== data.cPassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords must match",
        path: ["cPassword"],
      });
    }
  });

const SignUp = () => {
  const [signup] = useSignUpMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await signup(data).unwrap();
      notification.success({
        message: "Registration Successful",
        description: "You have successfully registered. Redirecting to login.",
      });
      navigate("/login");
    } catch (error: any) {
      // Type the error as any
      notification.error({
        message: "Registration Failed",
        description: error?.message || "Something went wrong!",
      });
    }
  };

  const defaultValues = {
    name: "forhad",
    email: "forhad@gmail.com",
    phone: "12365653245",
    password: "admin1234",
    cPassword: "admin1234",
    terms: false,
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="text-center">
        <div className="my-5 space-y-2">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            Create an account
          </h3>
          <p>
            Already have an account?{" "}
            <a
              href=""
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
      <Row justify="center" align="middle">
        <CommonForm
          resolver={zodResolver(signUpSchema)}
          onSubmit={onSubmit}
          defaultValues={defaultValues}
        >
          <CommonInput type="text" name="name" label="Name" />
          <CommonInput type="email" name="email" label="Email" />
          <CommonInput type="tel" name="phone" label="Phone" />
          <CommonInput type="password" name="password" label="Password" />
          <CommonInput
            type="password"
            name="cPassword"
            label="Confirm Password"
          />

          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "You must accept the terms and conditions",
              },
            ]}
          >
            <Checkbox>
              I agree to the <Link href="/terms">Terms and Conditions</Link>
            </Checkbox>
          </Form.Item>

          <br />
          <Button htmlType="submit">Sign Up</Button>
        </CommonForm>
      </Row>
    </div>
  );
};

export default SignUp;
