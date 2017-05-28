import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import ReviewListItem from './review_list_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

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
    const chairId = parseInt(this.props.match.params.chairId);

    if(currentUser === null || currentUser.chair_id === chairId) {
      if(Object.keys(reviews).length === 0) {
        return(dsas
          <div className='no-reviews'>
            <div>This chair has no reviews yet!</div>
          </div>
        );
      } else {
        return(
          <div className='review-index'>
            <ul className='review-list'>
              {Object.keys(reviews).map(key => (
                <ReviewListItem
                  key={`review${key}`}
                  review={reviews[key]} />
                  )
                )
              }
            </ul>
          </div>
        );
      }
    } else {
      return(
        <div className='review-index'>
          { (Object.keys(reviews).length === 0) ? (
            ""
          ) : (
            <ul className='review-list'>
              { Object.keys(reviews).map(key => (
                <ReviewListItem
                  key={`review${key}`}
                  currentUser={currentUser}
                  deleteReview={deleteReview}
                  review={reviews[key]} />
              )
            ) }
            </ul>
          )}
          <ReviewForm
            errors={errors}
            createReview={createReview}
            userId={currentUser.id}
            chairId={chairId} />
        </div>
      );
    }
  }

}

export default withRouter(ReviewIndex);
