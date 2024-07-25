
import React from 'react';
import { logo } from '../../utils/constant';

const Introduction = () =>   (
  <section className=" text-center p-8 rounded-lg shadow-lg">
    <img 
     src={logo}
      alt="Springdale Public School Logo" 
      className="mx-auto w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-8 border-blue-500 shadow-md"
    />
    <h1 className="text-3xl font-bold mt-4 text-blue-500">Welcome to Springdale Public School</h1>
    <p className="mt-2 text-lg text-gray-700">
      Where we nurture young minds for a brighter future.
    </p>
    
  </section>
);

export default Introduction;
