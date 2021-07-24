import React, { useState, useEffect } from "react";
import axios from "axios";

import "../Styles/row.css";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
const baseImgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await api.get(url);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [url]);
  return (
    <>
      <div className="row">
        <h2>{title.toUpperCase()}</h2>
        <div className="row-posters">
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                className={`poster ${isLargeRow && "poster-large"}`}
                src={`${baseImgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
