import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';

class ReviewIndex extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.chairId;
    this.props.fetchAllReviews(id);
  }

  render() {
    const { createReview, userId } = this.props;
    const chairId = this.props.match.params.chairId;

    return(
      <div>
        <ReviewForm
          createReview={createReview}
          userId={userId}
          chairId={chairId}
           />
      </div>
    );
  }
}

export default withRouter(ReviewIndex);
