
import React from 'react';

const GoogleMap = () => (
  <section className="py-8 px-4 bg-gray-100">

    <div className="max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Location</h1>

      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <iframe
          title="Google Maps"
          width="100%"
          height="100%"
          style={{ border: 2 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.374837014382!2d-122.41708568412367!3d37.77492927975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8f6a4b7b%3A0x41c2e2f54c8b8f0!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1605571187278!5m2!1sen!2sus"
          
        ></iframe>
      </div>
    </div>
  </section>
);

export default GoogleMap;
