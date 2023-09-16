import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import MovieList from "../pages/movieList";
import MovieDetail from '../pages/movieDetail';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage'


function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
