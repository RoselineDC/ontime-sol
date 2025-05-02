import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseURL from '../../../utils/baseURL';

const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseURL()}/api/orders`,
        credentials: 'include',
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        createOrder: (builder.mutation)({
            query: (newOrder ) => ({
                url: '/',
                method: 'POST',
                body: newOrder,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['Orders'],
        }),
        getOrdersByEmail: (builder.query)({
            query: (email) => ({
                url: `/email/${email}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            providesTags: ['Orders'],
            
        }),
    }),

})


export const {
    useCreateOrderMutation,
    useGetOrdersByEmailQuery,
} = orderApi;

export { orderApi };


