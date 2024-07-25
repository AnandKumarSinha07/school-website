import React from 'react';

const EducationalResources = () => {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Educational Resources</h1>
        <p className="text-gray-700 mb-6">
          Our commitment to quality education is reflected in the diverse range of resources we provide to our students.
        </p>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Digital Classrooms</h2>
            <p className="text-gray-600">
              Our digital classrooms offer an interactive learning experience with multimedia content and real-time feedback.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Interactive Learning Modules</h2>
            <p className="text-gray-600">
              Our interactive modules engage students with adaptive activities and assessments tailored to their learning progress.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">Access to Online Platforms</h2>
            <p className="text-gray-600">
              Students have access to a range of online platforms providing updated resources and tools to enhance their learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalResources;
