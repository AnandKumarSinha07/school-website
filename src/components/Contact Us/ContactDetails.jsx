
import React from 'react';

const ContactDetails = () => (
  <section className="py-8 px-4 bg-gray-100">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Details</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        </div>
        <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>info@springdale.edu</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactDetails;
