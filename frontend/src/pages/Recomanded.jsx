import React, { useEffect, useState } from 'react'
import BookCard from './books/BookCard';
import { useFetchAllBooksQuery } from '../redux/features/cart/booksApi'


// for swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// for navs 
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


// define categories
const Recomanded = () => {
 const {data: books=[]} = useFetchAllBooksQuery();
    
  // filter based of selected and present

  // check filtered books

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Recomanded for you</h2>
      {/* {/category fiter*/}
      <div className='mb-8 flex items-center'    >
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}   
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1800: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          // present based on filtering
          books.length > 0 && books.slice(8, 16).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        }

      </Swiper>



    </div>
  )
}

export default Recomanded
