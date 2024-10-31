import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const {bookId} =useParams()
    const id =parseInt(bookId)
    console.log(id)

    const data =useLoaderData()
 
    const book =data.find(book => book.bookId === id)
    console.log(book)
    
    const {bookId:currentBookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} =book

    return (
        <div className='flex flex-col lg:flex-row border-2 rounded-xl p-4 gap-10 w-11/12 mx-auto my-10'>
           <div  className='lg:w-[400px] lg:h-[500px] border bg-slate-200 p-2 rounded'>
            <img className='lg:w-[350px] lg:h-[450px] rounded-lg mx-auto' src={image} alt="" />
            </div> 
           <div className='w-full lg:w-1/2'>
            <h1 className=' text-2xl lg:text-4xl font-bold'>{bookName}</h1>
            <p className='text-xl my-2'>By: {author}</p>
            <hr />
            <p className='my-2'>{category}</p>
            <hr />
            <p className='my-4'>
             <span className='font-bold'>Review : </span>{review}
            </p>
            {/* dynamic tag */}
            <div className='flex gap-8 my-2'>
                Tag
            {
                tags.map((tag, idx)=><p key={idx} className='text-[#23BE0A]'> # {tag}</p>)
            }
            </div>

            <hr />
             {/* table */}
              <div className='flex gap-14'>
                <div>
                <p>Number of Pages: </p>
                <p>Publisher: </p>
                <p>Year of Publishing: </p>
                <p>Rating: </p>
                </div>
                <div className='font-bold'>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
                </div>
              </div>

             <div className='flex gap-4 mt-4'>
                <button className='btn'>Read</button>
                <button className='btn'>Wishlist</button>
             </div>


             
           </div>
        </div>
    );
};

export default BookDetails;