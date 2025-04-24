import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import cartReducer from './features/cart/cartSlice';
import { booksApi } from './features/cart/booksApi';
import { orderApi } from './features/oders/orderApi';
                                                                                                                                                                                                                             

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ['booksApi']: booksApi.reducer,
    ['ordersApi']: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, orderApi.middleware),
})
