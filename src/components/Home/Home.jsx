import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Body from './Body/Body';

function Home() {
  return (
    <section className="flex h-[30.5rem] w-screen justify-between bg-white_gray">
      <Sidebar />
      <Body />
    </section>
  );
}

export default Home;
