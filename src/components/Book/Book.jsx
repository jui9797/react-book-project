import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Book = ({book}) => {
    const {bookId, bookName, author, image,rating, category, tags} =book
    return (
        <Link to={`/books/${bookId}`}>
        <div>
            {/* daisy card */}
            <div className="card bg-base-100 border-2 shadow-xl p-4">
        <div className='w-[326px] h-[230px] p-4 flex justify-center items-center border-2 mx-auto bg-base-300 rounded-xl'>
            <img className='w-2/3 h-full rounded-2xl ' src={image} alt="" />
        </div>
        {/* tags */}
         
        <div className='flex gap-14 items-center  ml-10 mt-4'>
            {
                tags.map((tag, idx)=><button key={idx} className='text-[#23BE0A] font-bold rounded-2xl bg-slate-200 p-1 px-4' >{tag}</button> )
            }
        </div>

      <div className="card-body">
    <h2 className="card-title font-bold">{bookName}</h2>
    <p>By: {author}</p>
    <hr />
    <div className="card-actions ">
      <p>{category}</p>
      <p className='flex text-xl items-center gap-4'>{rating} <CiStar /></p>
    </div>
    </div>
    </div>
        </div>
        </Link>
    );
};

export default Book;