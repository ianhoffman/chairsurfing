import React from 'react';

const ReviewListItem = ({ review }) => (
  <li>
    <div>
      <span>{`${review.user.firstName} ${review.user.lastName}`}</span>
      <span>{review.rating}</span>
    </div>
    <div>
      {review.body}
    </div>
  </li>
);

export default ReviewListItem;
