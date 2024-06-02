import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { playerContext } from './context/playerContext';

const App = () => {
  const context = useContext(playerContext);
  console.log('Context in App: ', context);

  const { audioRef, track } = context;

  return (
    <div className="h-screen bg-[#E23E57]">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
