import React, { useState } from 'react';
import axios from 'axios';
import './Body.css';
import { BsFillPersonFill } from 'react-icons/bs';

function Body() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleSearch = () => {
    axios
      .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`, {
        headers: {
          'X-RapidAPI-Key':
            'cbd24544e9msh6c9b778c487480cp1cf9a0jsn450ccaa3a77a',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        },
      })
      .then((response) => {
        setSearchResults(response.data.data.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePlay = (track) => {
    if (!currentTrack || currentTrack.id !== track.id) {
      setCurrentTrack(track);
    } else {
      setCurrentTrack(null);
    }
  };

  return (
    <div className="h-full bg-gray-200">
      <div className="z-50 w-full px-8">
        <div className="flex">
          <div className="relative">
            <input
              className="search-input mb-2 h-9 w-[30rem] rounded-full border px-4 py-2 pr-10 text-lg text-Soft_gray"
              type="text"
              placeholder="Buscar"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button
              type="button"
              className="search-button absolute right-0 top-0 flex h-full w-10 items-center justify-center rounded-r text-Soft_gray"
              onClick={handleSearch}
            >
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </div>
          <div>
            <BsFillPersonFill />
          </div>
        </div>
      </div>

      {/* Resultados de búsqueda */}
      {searchResults.length > 0 && (
        <h1 className="pb-2 pl-10 text-left text-xl font-bold text-Red_Principal">
          Resultados
        </h1>
      )}

      <div
        className="relative grid h-80 grid-cols-5"
        style={{
          overflowY:
            searchResults.length > 0 && searchResults.length > 5
              ? 'scroll'
              : 'auto',
        }}
      >
        {searchResults.map((result, index) => (
          <div
            key={result.id}
            className="mx-auto flex flex-col px-4"
            style={{ width: '150px' }}
          >
            <div className="relative">
              <img
                className="h-28 w-28 object-cover"
                src={result.album.cover}
                alt={result.album.title}
              />
              <button
                type="button"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                onClick={() => handlePlay(result)}
              >
                {currentTrack && currentTrack.id === result.id ? (
                  <i className="fa fa-pause-circle fa-3x" aria-hidden="true" />
                ) : (
                  <i className="fa fa-play-circle fa-3x" aria-hidden="true" />
                )}
              </button>
            </div>
            <h3 className="overflow-hidden overflow-ellipsis text-left text-sm font-bold text-Grey_1">
              {result.title}
            </h3>
            <p className="overflow-hidden overflow-ellipsis pb-2 text-left text-xs text-Grey_2">
              {result.artist.name}
            </p>
          </div>
        ))}
      </div>
      {currentTrack && (
        <audio
          src={currentTrack.preview}
          autoPlay
          onEnded={() => setCurrentTrack(null)}
        />
      )}
    </div>
  );
}

export default Body;
