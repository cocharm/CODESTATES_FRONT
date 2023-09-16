import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './style.css'

function DetailRelated() {
  const params = useParams()
  const [detailRelated, setDetailRelated] = useState([]);

  const DETAIL_RELATED_API = `https://moviestates-alternative.codestates-seb.link/movies/${params.movieId}/related?page=1&limit=10`

  useEffect(() => {
    fetch(DETAIL_RELATED_API)
      .then((res) => res.json())
      .then((result) => setDetailRelated(result))
  }, [])
  console.log(detailRelated)

  return (
    <>
      <div className='related_section'>

        <div className="detail_related_title">
          연관된 영화 목록
        </div>
        <div className="related_movie_list">
          {detailRelated.map((movie) => (
            <div key={movie.id} className="related_movie_item">
              <img src={movie.postImage} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DetailRelated;