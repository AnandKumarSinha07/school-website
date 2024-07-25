import React from 'react';
import { Video1,Video2 } from '../../utils/constant';

const VideoGallery = () => {
  return (
    <section className="py-8 px-4 bg-white mb-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Video Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="video-container">
            <video controls className="w-full h-auto rounded-lg shadow-lg p-8 border-2">
              <source src={Video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center mt-2">Video 1</p>
          </div>
          <div className="video-container">
            <video controls className="w-full h-auto rounded-lg shadow-lg p-10 border-2">
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center mt-2">Video 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
