import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import './Team.css';

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const Team = () => {
   const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
   
   useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className='home'>
      <h1>Team</h1>
        <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        /> 
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
    </div>
  );
};

export default Team;
