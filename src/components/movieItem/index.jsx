import { Link } from "react-router-dom";
import "./style.css";

function MovieItem(props) {
  const averageScore = props.movie.averageScore || 0;

  console.log(props.movie);

  return (
    <>
      <Link to={`/movie/${props.movie.id}`}>
        <div className="movieitem__container">
          <div className="movieitem__container__poster">
            <img src={props.movie.postImage} />
          </div>
          <div className="movieitem__info">
            <div className="movieitem__info__title">
              <p>{props.movie.title}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieItem;
