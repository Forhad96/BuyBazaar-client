
import { baseApi } from "../../api/baseApi";

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
    register: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/users/create-user",
          method: "POST",
          body: userInfo,
        };
      },
      // transformResponse: (response) => response.data,
    }),
  }),
});
export const { useLoginMutation, useSignUpMutation,useRegisterMutation } = authApi;
