import { baseApi } from "../../api/baseApi";

const adminManagementApi = baseApi.injectEndpoints({
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
    getAllBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }

        return {
          url: "/bookings",
          method: "GET",
          // params,
        };
      },
    }),
    getSingleCars: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/cars/${id}`,
          method: "GET",
          // params,
        };
      },
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
export const {useAddCarMutation,useGetAllBookingsQuery} = adminManagementApi