import React from 'react';

const TeachingMethodologies = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Teaching Methodologies</h1>
        <p className="text-lg text-gray-700 mb-4">
          We use a blend of traditional and modern teaching techniques to cater to different learning styles. Our approach ensures that each student receives a personalized and engaging learning experience.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Traditional Techniques</h2>
            <p className="text-gray-600">
              Our traditional techniques focus on foundational education with structured lesson plans, textbook-based learning, and regular assessments.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Modern Techniques</h2>
            <p className="text-gray-600">
              We incorporate modern techniques such as digital classrooms, interactive learning modules, and online resources to enhance student engagement and learning outcomes.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Blended Learning</h2>
            <p className="text-gray-600">
              Our blended learning approach combines face-to-face instruction with online components, allowing for flexibility and a more personalized learning experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodologies;
