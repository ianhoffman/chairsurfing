import React from 'react';
import Rating from 'react-rating';

const ReviewListItem = ({ currentUser, review, deleteReview }) => (
  <li>
    <div>
      <span className='user-name'>{`${review.user.firstName} ${review.user.lastName}`}</span>
      { currentUser === null || currentUser === undefined || currentUser.id !== review.userId ? (
        <div></div>
      ) : (
        <a
          className='button button-white'
          onClick={(e) => {
            e.preventDefault();
            deleteReview(review.id);
          }
        }>remove</a>
      )}
    </div>
    <div className='rating'>
      <Rating
        start={0}
        stop={5}
        step={1}
        placeholderRate={review.rating}
        empty='fa fa-star-o'
        placeholder='fa fa-star'
        full='fa fa-star'
        readonly={true}
        quiet={true}
        />
    </div>
    <div className='review-body'>
        {review.body}
    </div>
  </li>
);

export default ReviewListItem;
