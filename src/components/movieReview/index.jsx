import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './style.css'
import Modal from "../../modal";

function MovieReview() {
  const params = useParams()
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const REVIEW_API = `https://moviestates-alternative.codestates-seb.link/reviews/movie/${params.movieId}`

  const getReviews = async () => {
    const response = await axios.get(REVIEW_API)

    // await.get -> API 가져 오기 (라이브러리 문법) 
    return response;
    //data는 함수 안에서만 도는 것
  };

  useEffect(() => {
    fetch(REVIEW_API)
      .then((res) => res.json())
      .then((result) => setComments(result))
  }, [])

  const handleCommentChange = (e) => {
    setNewComment(e.target.value)
  };


  const handleAddComment = () => {
    if (!userIsLoggedIn) {
      setIsModalOpen(true);
      return;
    }
    
    setComments(prevComments => [...prevComments, {
      id: Date.now(),
      content: newComment
    }]);
    setNewComment('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="movie_comment">
      <div className="comment_input">
        <textarea value={newComment} onChange={handleCommentChange}></textarea>
        <button onClick={handleAddComment}>작성</button>
      </div>
      <div className="comment_list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment_list_item">
            {comment.content}
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          {isModalOpen && (
        <Modal message="로그인이 필요한 서비스입니다." onClose={closeModal} />
      )}
        </div>
      )}
    </div>
  );
}

export default MovieReview;






