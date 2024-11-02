import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetails from './components/Banner/BookDetail/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PageToRead from './components/PagesToRead/PageToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader :() => fetch('/booksData.json')
      },
      {
        path:'/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path: '/pages',
        element:<PageToRead></PageToRead>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
