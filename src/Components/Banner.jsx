import React, { useState, useEffect } from "react";
import axios from "axios";

import requests from "../Assets/requests";
import "../Styles/banner.css";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
const baseImgUrl = "https://image.tmdb.org/t/p/original";

const truncate = (str, n) =>
  str?.length > n ? str.substr(0, n - 1) + "..." : str;

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
          backdropPosition: "center center",
        }}
      >
        <div className="content">
          <h1 className="title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="buttons">
            <button className="button">Play</button>
            <button className="button">More Info</button>
          </div>
          <h1 className="desc">{truncate(movie?.overview, 150)}</h1>
        </div>
      </header>
    </>
  );
}

export default Banner;
