import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function AddComment({ commentList, setCommentList }) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [starCount, setStarCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (textAreaValue.length < 1) {
      alert("Yorum yazısı boş olamaz.");
    } else if (!starCount) {
      alert("Yorum yapmadan önce oy vermelisiniz.");
    } else {
      const newCommentList = [
        ...commentList,
        { text: textAreaValue, rating: starCount },
      ];
      setCommentList(newCommentList);
    }
  };

  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleRatingChange = (count) => {
    setStarCount(count);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={textAreaValue} onChange={handleChange}></textarea>
        <ReactStars
          count={5}
          size={34}
          activeColor='#ffd700'
          onChange={handleRatingChange}
        />
        <input type='submit' value='Yorum Yap' />
      </form>
    </div>
  );
}

export default AddComment;
