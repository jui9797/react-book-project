import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div >
            <Navbar></Navbar>
           
           <div className=' min-h-[80vh] '>
           <Outlet></Outlet>
           </div>
          
            <Footer></Footer>
        </div>
    );
};

export default Root;