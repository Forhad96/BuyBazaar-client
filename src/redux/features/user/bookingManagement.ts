import { baseApi } from "../../api/baseApi";

const bookingManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBookings: builder.query({
      query: () => {
        // const params = new URLSearchParams();
        // if (args) {
        //   args.forEach((item: { name: string; value: string }) => {
        //     params.append(item.name, item.value);
        //   });
        // }

        return {
          url: "/bookings/my-bookings",
          method: "GET",
          // params,
        };
      },
    }),
    // getSingleCars: builder.query({
    //   query: (id) => {
    //     console.log(id);
    //     return {
    //       url: `/cars/${id}`,
    //       method: "GET",
    //       // params,
    //     };
    //   },
    // }),
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddBookingMutation, useGetMyBookingsQuery } =
  bookingManagement;
