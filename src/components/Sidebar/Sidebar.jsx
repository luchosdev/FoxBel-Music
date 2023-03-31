import React from 'react';

function Sidebar() {
  return (
    <div className="h-full w-80 bg-Dark_Red_Secondary">
      <img
        src="../../../public/img/foxbel-music.png"
        className="mx-auto mt-5 w-[15.65rem]"
        alt="logofox"
      />
      <div className="flex-col gap-y-3 pl-10 text-left">
        <div className="">
          <h1 className="text-xl font-bold">Mi Librería</h1>
          <h6>Recientes</h6>
          <h6>Artistas</h6>
          <h6>Álbums</h6>
          <h6>Canciones</h6>
          <h6>Estaciones</h6>
        </div>
        <div>
          <h1 className="mt-4 text-xl font-bold">Playlist</h1>
          <h6>Metal</h6>
          <h6>Para bailar</h6>
          <h6>Rock 90s</h6>
          <h6>Baladas</h6>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
