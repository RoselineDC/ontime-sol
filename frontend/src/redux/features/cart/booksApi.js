import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseURL from '../../../utils/baseURL';

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseURL()}/api/books`,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery,
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ['Books'],
    }),

    // get book by id
    fetchBookById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Books', id }],
    }),

    // add books
    addBook: builder.mutation({
      query: (newBook) => ({
        url: `/create-book`,
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags: ['Books'],
    }),

    // update book
    updateBook: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/:${id}`,
        method: 'PUT',
        body: rest,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Books'],
    }),

    // delete book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  })

});

export const {
  useFetchAllBooksQuery,
  useFetchBookByIdQuery,
  useAddBookMutation, 
  useUpdateBookMutation,
  useDeleteBookMutation
} = booksApi;
export { booksApi };

