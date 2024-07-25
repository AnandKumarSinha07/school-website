import React from 'react';
import { dates } from '../../utils/date';

const ImportantDates = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Important Dates</h1>
      <div className="flex justify-center gap-4">
        {dates.map((date, index) => (
          <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{date.title}</h2>
            <p className="text-xl font-medium">{date.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantDates;
