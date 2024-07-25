import React from 'react';
import ProfileCard from './Profilecard';
import {data} from "../../utils/data.js"

const FacultyProfiles = () => {
 

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10 ml-12 mr-14 mb-32">

      {data.map((card)=>(
        <ProfileCard profile={card} key={card.name}/>
      ))}
    </div>
  );
};

export default FacultyProfiles;
