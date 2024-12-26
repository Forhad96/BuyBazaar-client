/**
 * The base API for the application.
 * This API is responsible for handling all the base request
 * to the server and also handle the refresh token and
 * automatic logout if the token is invalid.
 */
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
      
    }
    // console.log("headers", headers.get("authorization") );
    return headers;
  },
});
/**
 * The interface for the error data
 */
interface ErrorData {
  message: string;
}
/**
 * The custom base query function
 * that handle the refresh token and logout
 *
 * This function will be called when the request is made to the server
 * and the server return a 401 status code.
 * The function will then make a request to the server to get a new token
 * and then make the request again with the new token
 *
 * If the server return a 404 status code, the function will show a toast
 * error message with the message from the server
 *
 * If the server return a 401 status code and the refresh token is invalid,
 * the function will dispatch the logout action and remove the user from the
 * state
 */
const baseQueryWithRefreshToken: BaseQueryFn = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);
  // console.log(result.error?.data);
  if (result?.error?.status === 404) {
    const errorData = result.error.data as ErrorData;
    toast.error(errorData.message);
  }

  if (result?.error?.status == 401) {
    const res = await fetch(
      "http://localhost:5000/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await res.json();

    // console.log("ok",result);
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      // console.log("line 75",user);
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
    //
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  // tagTypes: ["semester", "courses"], // Define tag types for caching
  endpoints: () => ({}),
});


