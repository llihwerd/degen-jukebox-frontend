import React, { useState, useEffect } from "react";
import TrackList from "../components/TrackList";
import musicData from "../../lib/musicData";

const Jukebox = () => {
  const [music, setMusic] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    setMusic(musicData);
  }, []);

  const handleTrackSelect = (index) => {
    setCurrentTrackIndex(index);
  };

  return (
    <div className="frame">
    <div className="player-wrapper"> {/* Update class name */}
      <div className="player"> {/* Update class name */}
        <img src={music[currentTrackIndex]?.cover} className="currentAlbum" />
        <div className="controls"> {/* Update class name */}
          {/* Render audio controls */}
          <audio controls src={music[currentTrackIndex]?.audio} className="mt-4" />

          {/* Render album covers as buttons */}
          <div className="flex gap-4 mt-4">
            {music.map((track, index) => (
              <button
                key={index}
                className={`w-20 h-20 relative overflow-hidden rounded-full focus:outline-none ${
                  index === currentTrackIndex ? "border-4 border-blue-500" : ""
                }`}
                onClick={() => handleTrackSelect(index)}
              >
                <img src={track.cover} alt={track.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Jukebox;
