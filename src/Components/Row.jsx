import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
const baseImgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, url }) => {
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
        <h2>{title}</h2>
        <div className="posters">
          {movies.map((movie) => {
            return (
              <img
                className="poster"
                src={`${baseImgUrl}${movie.poster_path}`}
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
