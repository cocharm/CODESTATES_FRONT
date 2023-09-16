import React from "react";
import "./style.css";

function Modal({ message, onClose }) {
  return (
    <div className="modal">
      <div className="modal_content">
        <p>{message}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default Modal;
