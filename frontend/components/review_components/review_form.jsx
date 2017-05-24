import React from 'react';

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
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    return(
      <form>
        <textarea onChange={this.handleChange('body')}></textarea>
        <div>
          <input
            name='rating'
            type='radio'
            onChange={this.handleChange('rating')}
            value='5'></input>
          <input
            name='rating'
            type='radio'
            onChange={this.handleChange('rating')}
            value='4'></input>
          <input
            name='rating'
            type='radio'
            onChange={this.handleChange('rating')}
            value='3'></input>
          <input
            name='rating'
            type='radio'
            onChange={this.handleChange('rating')}
            value='2'></input>
          <input
            name='rating'
            type='radio'
            onChange={this.handleChange('rating')}
            value='1'></input>
          <input
            name='rating'
            type='radio'
            onChange={this.handleChange('rating')}
            value='0'></input>

          <a onClick={this.handleSubmit}>Submit</a>
        </div>
      </form>
    );
  }

}

export default ReviewForm;
