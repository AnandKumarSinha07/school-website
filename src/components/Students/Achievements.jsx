import React from 'react';
import achievements from '../../utils/achievments';

const Achievements = () => {
 
  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Achievements</h2>
        <div className="flex flex-wrap gap-2 ml-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Achievement {index + 1}</h3>
              <p className="text-gray-900">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
