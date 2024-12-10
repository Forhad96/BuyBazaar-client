import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CommonForm from "../components/form/CommonForm";
import CommonInput from "../components/form/CommonInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login successful", { id: tostId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("something went wrong.", { id: tostId, duration: 2000 });
    }
  };

  const defaultValues = {
    // email: "forhad@gmail.com",
    // password: "admin123",
  };
  return (
    <Row justify="center" align="middle" style={{ marginTop:"80px"}}>
      <CommonForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <CommonInput type="text" name="email" label="Email" />
        <CommonInput type="text" name="password" label="Password" />
        <Row justify="space-between" style={{ gap: 20 }}>
          <Button htmlType="submit">Login</Button>
        </Row>
      </CommonForm>
    </Row>
  );
};

export default Login;
