import React from 'react';
import { curriculumData } from '../../utils/curriculumData';
const Curriculum = () => {
 

  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Curriculum</h1>
        
        <div className="space-y-12">
          {/* Primary Curriculum */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Primary (Grades 1-5)</h2>
            <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
              {curriculumData.primary.map((subject, index) => (
                <li key={index} className="text-lg">{subject}</li>
              ))}
            </ul>
          </div>

          {/* Secondary Curriculum */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Secondary (Grades 6-10)</h2>
            <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
              {curriculumData.secondary.map((subject, index) => (
                <li key={index} className="text-lg">{subject}</li>
              ))}
            </ul>
          </div>

          {/* Senior Secondary Curriculum */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Senior Secondary (Grades 11-12)</h2>
            <div className="space-y-6">
              {/* Science Stream */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">Science Stream</h3>
                <ul className="list-disc list-inside pl-6 text-gray-600 space-y-2">
                  {curriculumData.seniorSecondary.science.map((subject, index) => (
                    <li key={index} className="text-lg">{subject}</li>
                  ))}
                </ul>
              </div>

              {/* Commerce Stream */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">Commerce Stream</h3>
                <ul className="list-disc list-inside pl-6 text-gray-600 space-y-2">
                  {curriculumData.seniorSecondary.commerce.map((subject, index) => (
                    <li key={index} className="text-lg">{subject}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
