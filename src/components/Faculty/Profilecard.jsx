import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 ">
    
      <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
      <p className="text-gray-600">{profile.position}</p>
      <p className="text-gray-500">{profile.qualification}</p>
      <p className="text-gray-400">{profile.experience}</p>
    </div>
  );
};

export default ProfileCard;
