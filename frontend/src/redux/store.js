import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import cartReducer from './features/cart/cartSlice';
import { booksApi } from './features/cart/booksApi';
                                                                                                                                                                                                                             

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ['booksApi']: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
})
