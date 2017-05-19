import React from 'react';

class ChairForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      address: '',
      about: '',
      image_url: '',
      user_id: props.currentUser.id
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return function(e) {
      e.preventDefault();
      this.setState({[field]: e.currentTarget.value});
    }.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChair(this.state).then(
      this.props.history.push('/')
    );
  }

  render() {
    const { create, closeModal } = this.props;

    return(
      <form className='baseForm'>
        { create ? (
          <div className='formHeader'>
            <h2>Create your chair</h2>
            <p onClick={closeModal}>X</p>
          </div>
        ) : '' }

        <div className='formBody'>
          <input
            onChange={this.update('description')}
            placeholder='Title'
            value={this.state.description}></input>

          <input
            onChange={this.update('address')}
            placeholder='Address'
            value={this.state.address}></input>

          <textarea
            onChange={this.update('about')}
            placeholder='About'
            value={this.state.about}></textarea>

          <a className='button button-blue'
            onClick={this.handleSubmit}>
            Create Chair
          </a>
        </div>

      </form>
    );
  }
}

export default ChairForm;
