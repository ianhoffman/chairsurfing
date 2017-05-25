import React from 'react';
import Rating from 'react-rating';

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
      res => (
        this.setState({
          body: '',
          rating: 0
        })
      )
    );
  }

  handleRating(e) {
    this.setState({rating: e});
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  render() {
    return(
      <form className='review-form'>
        <textarea onChange={this.handleChange} defaultValue='Leave a review!'></textarea>
        <div>
          <div>
            <Rating
              start={0}
              stop={5}
              step={1}
              placeholderRate={this.state.rating}
              placeholder='fa fa-star fa-2x'
              empty='fa fa-star-o fa-2x'
              full='fa fa-star fa-2x'
              onClick={this.handleRating}
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
