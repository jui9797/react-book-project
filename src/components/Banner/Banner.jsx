import bannerimg from '../../assets/books.jpg'

const Banner = () => {


    return (
        <div>
           <div className="hero bg-base-200 p-10 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <div className='lg:w-1/2'>
    <img
      src={bannerimg}
      className="w-full  rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2'>
      <h1 className="text-2xl lg:text-5xl font-bold mb-5">Books to freshen up your bookshelf</h1>
      
      <button className="btn p-2 lg:p-4 bg-[#23BE0A] text-white">View The List</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;