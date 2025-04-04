import React, { useEffect, useState } from 'react'
import BookCard from './books/BookCard'
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
const categories = ["Choose a Genre", "Business", "Fiction", "Horror", "Adventure", "Non-fiction", "Marketing"]
const TopSallers = () => {
    const [selectedCategory, setSelectedCategory] = useState("Choose a Genre")
    const {data: books=[]} = useFetchAllBooksQuery();
   

  // filter based of selected and present
  const filteedBooks = selectedCategory === "Choose a Genre"
    ? books : books.filter(book => book.category === selectedCategory.toLocaleLowerCase())
  // check filtered books
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
      {/* {/category fiter*/}
      <div className='mb-8 flex items-center'    >
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category" id="category" className='border bg-[#eaeaea] border-gray-300
            rounded-md focus:outline-none block px-4 py-2'>
          {/* display categories */}
          {
            categories.map((category, index) => (
              <option key={index} value={category}>{category}
              </option>
            ))
          }
        </select>
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
          filteedBooks.length > 0 && filteedBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard  book={book} />
            </SwiperSlide>
          ))
        }

      </Swiper>



    </div>
  )
}

export default TopSallers
