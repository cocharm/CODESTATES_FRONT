import React from "react";
import Header from "../../components/header";
import axios from "axios";
import "./style.css";
import MovieItem from "../../components/movieItem";
import { useState, useEffect } from "react";
import PageHeader from "../../components/pageHeader";
import Search from "../../components/search";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getTop10Movies = async () => {
    const URL = "https://moviestates-alternative.codestates-seb.link/movies?page=1&limit=10"
    const response = await axios.get(URL);
    console.log(response);
    return response.data.data;
    // fetch(URL)
    // .then(res => console.log(res))
  };

  const setMovieListByResponse = async () => {
    const data = await getTop10Movies();
    setMovieList(data);
  };

  useEffect(() => {
    setMovieListByResponse();
  }, []);

  console.log(movieList);

  return (
    <>
      <Header />
      <PageHeader />
      <Search />
      <div className="movielist__container">
        {movieList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
