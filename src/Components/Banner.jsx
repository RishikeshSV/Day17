import React, { useState, useEffect } from "react";
import axios from "axios";

import requests from "../Assets/requests";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const data = async () => {
      const request = await api.get(requests.fetchNetflixOriginals);
      let randMovieIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randMovieIndex]);
    };
    data();
  }, []);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("${baseImgUrl}${movie?.backdrop_path}")`,
        }}
      >
        <div className="content">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
      </header>
    </>
  );
}

export default Banner;
