
import React from 'react';
import Introduction from '../components/Home/Introduction';
import Carousel from '../components/Home/Carousel';


const HomePage = () => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow">
      <Introduction />
      <Carousel />
    </main>
  </div>
);

export default HomePage;
