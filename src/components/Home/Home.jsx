import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Body from './Body/Body';

function Home() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="relative flex-grow bg-white_gray">
        <div className="absolute left-0 right-0 top-0 z-10">
          {/* Barra de búsqueda */}
        </div>
        <div className="px-4 py-6">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default Home;
