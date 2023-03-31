import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { MdPlayArrow } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import axios from 'axios';

function Body() {
  const [searchTerm, setSearchTerm] = useState('');
  const [albumImage, setAlbumImage] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    axios
      .get('http://api.deezer.com/album/302127')
      .then(({ data }) => {
        setAlbumImage(data.cover_big);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="w-">
      {/* Barra de Búsqueda */}
      <div className="mx-8 flex h-1/6 items-center justify-between">
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Buscar"
            className="box-border w-[32.7rem] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={searchTerm}
            onChange={handleInputChange}
            style={{ boxSizing: 'border-box' }}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 px-3 py-2"
            style={{ boxSizing: 'border-box' }}
          >
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </button>
        </div>
        <div className="flex gap-x-3">
          <BsFillPersonFill size={24} color="red" />
          <div>Luis Sequera</div>
        </div>
      </div>
      {/* Info-Cover Artista */}
      <div className="h-2/6 w-full">
        <div className="relative h-64 w-64">
          <div />
          <MdPlayArrow className="my-auto h-12 w-12 rounded-full" />
        </div>
        <div>
          <div>
            <h1>Adela 21</h1>
            <div>
              <p>Lo mejor de Adele</p>
              <span>321.123 seguidores</span>
            </div>
          </div>
        </div>
      </div>
      {/* Resultados de búsqueda */}
      <div className="h-3/6">resultados</div>
    </section>
  );
}

export default Body;
