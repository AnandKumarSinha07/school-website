import React from 'react';
import councilMembers from '../../utils/councilMembers';

const StudentCouncil = () => {
 
 

  return (
    <section className="bg-blue-50 py-12">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Student Council</h2>

        <div className="flex gap-6 justify-center">
          {councilMembers.map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg border border-blue-200 w-[280px]">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{member.role}</h3>
              <p className="text-lg font-medium text-gray-800 mb-1">{member.name}</p>
              <p className="text-gray-600">{member.grade}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentCouncil;
