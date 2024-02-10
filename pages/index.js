// pages/index.js
import React from "react";
import Jukebox from "./jukebox/index";

const Home = () => {
  return (
    <div className="container">
      <main>
        <h1>Degen Radio</h1>
        <Jukebox />
      </main>
    </div>
  );
};

export default Home;
