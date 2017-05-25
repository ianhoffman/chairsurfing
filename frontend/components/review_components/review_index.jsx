import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import ReviewListItem from './review_list_item';

class ReviewIndex extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.chairId;
    this.props.fetchAllReviews(id);
  }

  render() {
    const {
      createReview,
      errors,
      currentUser,
      reviews,
      deleteReview
    } = this.props;
    const chairId = this.props.match.params.chairId;


    if(Object.keys(reviews).length === 0) {
      return (
        <div className='no-reviews'>
          <div>There are no reviews...</div>
          <ReviewForm
            createReview={createReview}
            userId={currentUser.id}
            chairId={chairId}
            errors={errors}
            />
        </div>
      );
    } else {
      return(
        <div className='review-index'>
          <ul className='review-list'>
            {Object.keys(reviews).map(key => (
              <ReviewListItem
                key={`review${key}`}
                review={reviews[key]}
                deleteReview={deleteReview}
                currentUser={currentUser} />
              )
            )}
          </ul>
          { currentUser === null ? (
              <div></div>
            ) : (
              <ReviewForm
                createReview={createReview}
                userId={currentUser.id}
                chairId={chairId}
                errors={errors}
                />
            )}
        </div>
      );
    }
  }

}

export default withRouter(ReviewIndex);
