import React, { useEffect } from 'react'
import InputField from '../addbook/InputField';
import SelectField from '../addbook/SelectField';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchBookByIdQuery, useUpdateBookMutation } from '../../../redux/features/books/booksApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateBook = () => {
  
    
  return (
    <>
    update book
    </>
  )
}

export default UpdateBook