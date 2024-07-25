
import React from 'react';
import { sports, science, cultural, classN, library } from '../../utils/constant';
import { Link } from 'react-router-dom';

const galleryItems = [
  { src: sports, alt: 'Students participating in various sports events.' },
  { src: science, alt: 'Students presenting their science projects.' },
  { src: cultural, alt: 'Students performing in the cultural fest.' },
  { src: classN, alt: 'A glimpse of our interactive classrooms.' },
  { src: library, alt: 'Students reading and studying in the school library.' },
];

const Gallery = () => (
  <section className="py-8 px-4">
    <div className="container mx-auto">
     
      <div className='flex justify-center gap-8 cursor-pointer'>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h1>
          <Link to='/video'><h1 className="text-3xl font-bold text-center text-gray-800 mb-8">VideoGallery</h1></Link> 
      </div>
      
     
      <div className="flex flex-wrap justify-center gap-4">
      
        {galleryItems.map((item, index) => (
          
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className="relative w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center p-4">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
