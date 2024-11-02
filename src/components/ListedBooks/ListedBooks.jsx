import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

const [sort, setSort] =useState('')
const [readList, setReadList] =useState([])
const [wishlist, setWishList] =useState([])

const allBooks =useLoaderData()

useEffect(()=> {

    // get readlist books from localstorage
    const storedReadList =getStoredReadList()
    const storedReadListInt =storedReadList.map(id => parseInt(id))  //optional cz id k number korte hobena.
    console.log(storedReadList, allBooks, storedReadListInt);
    const readBookList =allBooks.filter(book => storedReadListInt.includes(book.bookId))
    setReadList(readBookList);


    // get wishlist book from local storage
    const storedWishList =getStoredWishList()
    const wishBookList =allBooks.filter(book => storedWishList.includes(book.bookId))
    setWishList(wishBookList);

}, [])


// sorthing function
const handleSort=sortType=>{
    setSort(sortType)

    // sort by pages
    if(sortType == 'Pages'){
        const sortedReadlist =[...readList].sort((a,b) => a.totalPages - b.totalPages)
        setReadList(sortedReadlist);
    }

    else if(sortType == 'Ratings'){
        const sortedReadlist =[...readList].sort((a,b) => a.rating - b.rating)
        setReadList(sortedReadlist); 
    }
}

    return (
        <div className='w-11/12 mx-auto my-10 '>
            <h3 className='text-3xl font-bold my-4'>Listed books here...</h3>

            {/* dropdown menu */}
        <div className='text-center'>
        <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-error m-1">
                {sort? `Sort by: ${sort}` : 'Sortby'}
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=>handleSort('Ratings')} ><a>Ratings</a></li>
            <li onClick={()=>handleSort('Pages')} ><a>No of Pages</a></li>
          </ul>
        </div>
        </div>

        <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Listed Books: {readList.length}</h2>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2 p-4 rounded-lg bg-red-300'>
        {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
        }
    </div>

    </TabPanel>
    <TabPanel>
      <h2>Wish Booklist : {wishlist.length}</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2 p-4 rounded-lg bg-blue-300'>
        {
            wishlist.map(book => <Book key={book.bookId} book={book}></Book>)
        }
    </div>

    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;