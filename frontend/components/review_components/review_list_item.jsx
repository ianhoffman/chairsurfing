import React from 'react';

const ReviewListItem = ({ review, deleteReview }) => (
  <li>
    <div>
      <span>{`${review.user.firstName} ${review.user.lastName}`}</span>
      <a onClick={(e) => {
          e.preventDefault();
          deleteReview(review.id);
        }
      }>Delete</a>
    </div>
    <div>
      {review.rating}
    </div>
    <div>
      {review.body}
    </div>
  </li>
);

export default ReviewListItem;
