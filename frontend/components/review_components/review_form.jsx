import React from 'react';
import Rating from 'react-rating';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: 'Leave a review!',
      rating: null,
      user_id: this.props.userId,
      chair_id: this.props.chairId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.body === 'Leave a review!') {
      this.state.body = '';
    }

    this.props.createReview(this.state)
      .then(res => this.resetForm());
  }

  resetForm() {
    this.setState({
      body: 'Leave a review!',
      rating: null
    });
  }

  handleRating(e) {
    this.setState({rating: e});
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  render() {
    const { errors } = this.props;

    return(
      <form className='review-form'>

        { errors.length > 0 ? (
          <ul className='errorList'>
            {errors.map((err, i) => (
              <li
                className='errorMessage' 
                key={`error${i}`}>{err}</li>
            ))}
          </ul>
        ) : (
          ''
        )}

        <textarea
          onChange={this.handleChange}
          value={this.state.body}>
        </textarea>

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
