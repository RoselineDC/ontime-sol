import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import cartReducer from './features/cart/cartSlice';
import { booksApi } from './features/books/booksApi';
import { orderApi } from './features/oders/orderApi';
                                                       


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, orderApi.middleware),
})
