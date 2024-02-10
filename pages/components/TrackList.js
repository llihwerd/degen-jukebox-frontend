// pages/components/TrackList.js
import React from "react";
import musicData from "../../lib/musicData";

const TrackList = ({ currentTrackIndex, handleTrackSelect }) => {
  return (
    <div className="track-list">
      {musicData.map((track, index) => (
        <button
          key={index}
          className={`track ${index === currentTrackIndex ? "active" : ""}`}
          onClick={() => handleTrackSelect(index)}
        >
          {track.title} - {track.artist}
        </button>
      ))}
    </div>
  );
};

export default TrackList;
