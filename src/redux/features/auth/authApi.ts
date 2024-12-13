import { TResponse, TUserResponseData } from "@/types";
import { baseApi } from "../../api/baseApi";
import { TUser } from "./authSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    signUp: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/users/create-customer",
          method: "POST",
          body: userInfo,
        };
      },
      // transformResponse: (response) => response.data,
    }),
  }),
});
export const { useLoginMutation, useSignUpMutation } = authApi;
