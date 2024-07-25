
import React, { useState } from "react";
import CrouselCard from "./CrouselCard";
import { slides } from "../../utils/slides";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Carousel = () => {
  const [index,setindex]=useState(0);

  const leftShift=()=>{
     
      if(index-1<0){
          setindex(slides.length-1)
      }
      else{
          setindex(index-1);
      }

  }

  const rightShift=()=>{
        
       if(index+1>=slides.length){
          setindex(0)
       }
      else{
          setindex(index+1);
      }
  }

 
  return (
    <div className="">
     
    
     <div>
      <CrouselCard prop={slides[index]} />

      <div className="mt-6 space-x-4 mx-44 flex justify-center">

        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
          onClick={leftShift}>
          <GrPrevious/>
        </button>

        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
           onClick={rightShift}> 
           <GrNext/>
        </button>

      </div>

    </div>
      


      <div className="w-[80%] text-center ml-20 mt-4 mb-4">
        <p className="text-gray-900">
          Welcome to Springdale Public School, where we nurture curiosity, foster
          creativity, and cultivate a passion for lifelong learning. Our school
          is dedicated to providing a supportive and inclusive environment where
          every student can thrive academically, socially, and emotionally. With
          a team of dedicated educators, we offer a comprehensive curriculum
          that balances rigorous academics with a wide range of extracurricular
          activities. iduals. Join us on a journey of discovery and
          excellence, where every child is valued and encouraged to reach their
          fullest potential.
        </p>
      </div>

    </div>
  );
};

export default Carousel;
