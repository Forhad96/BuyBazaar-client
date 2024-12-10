import { TCar } from "../../../types";
import { baseApi } from "../../api/baseApi";
interface ApiResponse<T> {
  data: T;
}

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }

        return {
          url: "/cars",
          method: "GET",
          // params,
        };
      },
    }),
    getSingleCars: builder.query({
      query: (id) => {
        return {
          url: `/cars/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response: ApiResponse<TCar>) => response.data, // Transform response to avoid data.data
    }),
    addCar: builder.mutation({
      query: (data) => ({
        url: "/cars",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllCarsQuery, useAddCarMutation, useGetSingleCarsQuery } =
  carManagementApi;
