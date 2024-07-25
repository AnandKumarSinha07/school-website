
import React from 'react';
import FacultyDetails from '../components/Faculty/FacultyDetails';

const FacultyPage = () => (
  <div>
    <h1 className='font-bold text-3xl flex justify-center mt-4 text-blue-600  hover:text-sky-900 cursor-pointer'>Faculty  Profile</h1>
    <FacultyDetails/>
  </div>
);

export default FacultyPage;
