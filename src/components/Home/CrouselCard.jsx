import React from 'react';

const CrouselCard = ({prop}) => {
  
  console.log(prop)
 

  return (
    <div className="relative w-full h-64 bg-cover bg-center rounded-lg bg-blue-100">
     
      <div className="absolute inset-0 flex items-center justify-center text-white p-4">
        <p className="text-xl font-bold text-center text-black">{prop.text}</p>
      </div>
    </div>
  );
};

export default CrouselCard;
