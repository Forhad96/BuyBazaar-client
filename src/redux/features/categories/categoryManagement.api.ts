import { baseApi } from "@/redux/api/baseApi";

const categoryManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({    
        getAllProductCategories: builder.query({
            query: () => ({
                url: '/categories',
                method: 'GET'
            })
        })      
    })
})



export const {useGetAllProductCategoriesQuery} = categoryManagementApi