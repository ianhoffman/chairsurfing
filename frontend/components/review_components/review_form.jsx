import React from 'react';
import StarRatings from 'react-star-ratings';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: null,
      user_id: this.props.userId,
      chair_id: this.props.chairId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state).then(
      res => {
        this.setState({
          body: '',
          rating: null
        });
      }
    );
  }

  handleRating(e) {
    e.preventDefault();
    debugger
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  render() {
    return(
      <form className='review-form'>
        <textarea onChange={this.handleChange}></textarea>
        <div>
          <div>
            <StarRatings
              rating={this.state.rating}
              isSelectable={true}
              isAggregateRating={false}
              changeRating={this.handleRating}
              numOfStars={ 6 }
            />
          </div>


          <a
            className='button button-blue'
            onClick={this.handleSubmit}>Submit</a>
        </div>
      </form>
    );
  }

}

export default ReviewForm;
