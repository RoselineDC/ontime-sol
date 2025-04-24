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
            query: (orderData) => ({
                url: '/createOrder',
                method: 'POST',
                body: orderData,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['Orders'],
        }),
    }),

})

export const {
    useCreateOrderMutation,
} = orderApi;

export { orderApi };


