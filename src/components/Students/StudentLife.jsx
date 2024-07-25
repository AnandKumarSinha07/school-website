import React from 'react';
import { FaHeart } from "react-icons/fa";
import { clubs } from '../../utils/clubs';
import { activities } from '../../utils/activities';


const StudentLife = () => {
  
 

  return (
    <section className="bg-gray-100 py-12">

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Student Life</h2>

        <div className="flex flex-wrap justify-center gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Extracurricular Activities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaHeart/>
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          {/* Clubs and Societies Card */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clubs and Societies</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {clubs.map((club, index) => (
                <li key={index} className="flex items-center gap-2  ">
                   <FaHeart />
                  {club}
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>{/*Main Div*/}
    </section>
  );
};

export default StudentLife;
