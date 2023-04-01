import React, { useState } from 'react';
import { MdPlayArrow } from 'react-icons/md';
import { RiSkipBackMiniFill, RiSkipForwardMiniFill } from 'react-icons/ri';
import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2';

function Player() {
  const [volumen, setVolumen] = useState(50); // valor inicial del volumen
  const [prevVolumen, setPrevVolumen] = useState(volumen); // almacenar posición anterior del volumen
  const [icono, setIcono] = useState(<HiSpeakerWave className="h-8 w-8" />); // icono actual del volumen

  function handleVolumenChange(event) {
    setVolumen(event.target.value); // actualizar el valor del volumen cuando cambie el input
    setPrevVolumen(event.target.value); // actualizar la posición anterior del volumen
    // cambiar el icono del volumen según el rango actual
    if (event.target.value === '0') {
      setIcono(<HiSpeakerXMark className="h-8 w-8" />);
    } else {
      setIcono(<HiSpeakerWave className="h-8 w-8" />);
    }
  }

  function handleIconoClick() {
    // cambiar el icono del volumen y mover la bolita a cero o devolverla a su posición anterior
    if (volumen === '0') {
      setVolumen(prevVolumen);
      setIcono(<HiSpeakerWave className="h-8 w-8" />);
    } else {
      setPrevVolumen(volumen);
      setVolumen('0');
      setIcono(<HiSpeakerXMark className="h-8 w-8" />);
    }
  }

  return (
    <div className="flex h-20 w-full items-center justify-between bg-red_orange">
      {/* Info Song */}
      <div className="flex gap-x-3">
        <img className="h-20 w-20 bg-black" alt="cover" />
        <div className="my-auto flex-col">
          <div className="text-sm font-bold">Canción</div>
          <div className="flex text-xs">
            <div>Artista</div>
            <span className="mx-1"> + </span>
            <div>Album</div>
          </div>
        </div>
      </div>

      {/* Player */}
      <section className="flex gap-x-2">
        <RiSkipBackMiniFill className=" h-12 w-12" />
        <MdPlayArrow className="my-auto h-12 w-12 rounded-full bg-light_red" />
        <RiSkipForwardMiniFill className=" h-12 w-12" />
      </section>

      {/* Volume */}
      <section className="flex items-center pr-8">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          style={{
            height: '6px',
            width: '100px',
            borderRadius: '10000px',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 0px 0px #fff',
            outline: 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            cursor: 'pointer',
          }}
          value={volumen}
          onChange={handleVolumenChange}
        />
        <div onClick={handleIconoClick} className="cursor-pointer pl-2">
          {icono}
        </div>
      </section>
    </div>
  );
}

export default Player;
