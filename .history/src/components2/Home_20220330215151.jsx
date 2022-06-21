import React from "react";
import Products from "./Products";


const Home=()=> {
   
  return (
        <div className="hero">
       <div className="card bg-dark text-white border-0">
        <img src="\assest\slide1.webp" className="card-img" alt="Background"height="657px" />
       <div className="card-img-overlay d-flex flex-column justify-content-center">
           <div className="container">
       
          
         <h5 className="card-title display-3 fw-bolder mb-0"><marquee behavior="scroll" direction="left py-8">NEW SESSIOM ARRIVALS </marquee></h5>
           <p className="card-text lead fs-2">
          CHECK OUT ALL THE TRENDS
           </p>
           </div>
        </div>
      </div>
      <Products/>
        </div>
    

   
  );
};

export default Home;





// <marquee behavior="scroll" direction="left">HTML scrolling text... </marquee>