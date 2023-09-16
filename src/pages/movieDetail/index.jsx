import './style.css';
import Header from "../../components/header";
import Footer from '../../components/footer';
import MovieReview from "../../components/movieReview";
import DetailRelated from '../../components/detailRelated'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function MovieDetail() {
  const params = useParams()
  // const [isOpen, setIsOpen] = useState(false);
  const [movieData, setMovieData] = useState({});
  const MOVIE_DETAIL_API = `https://moviestates-alternative.codestates-seb.link/movies/${params.movieId}/detail`

  // https://moviestates.codestates-seb.link/movies/${params.movieId}/detail

  useEffect(() => {
    fetch(MOVIE_DETAIL_API)
      .then((res) => res.json())
      .then((result) => setMovieData(result))
  }, [])

  return (
    <div>
      <Header />
      <div className='detail_container'>
        <div className="detail_info_container">
          <div className="detail_poster">
            <img src={movieData.postImage} alt="poster" />
          </div>
          <div className="detail_info">
            <div className="detail_info_title">
              <p>{movieData.title}</p>
            </div>
            <div className="detail_info_genres">
              {movieData.genres &&
                movieData.genres.map((genre) => (
                  <div className="genre_item" key={genre.id}>
                    {genre.name}
                  </div>
                ))}
            </div>
            <div className="detail_info_plot">
              <p className="plot_title">- 줄거리</p>
              <p className="plot_data">{movieData.plot}</p>
            </div>
            <div className="detail_info_actors">
              {movieData.actors &&
                movieData.actors.map((actor) => <div key={actor.id}>{actor.name}</div>)}
            </div>
          </div>
        </div>
        <div className='detail_comment'>
          <MovieReview />
        </div>
        {/* 연관된 영화(선택) */}
        <div className="detail_related">
          <DetailRelated />
        </div>
      </div >
    </div >
  )
}

export default MovieDetail;