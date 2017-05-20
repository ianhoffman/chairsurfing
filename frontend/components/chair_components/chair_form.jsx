import React from 'react';
import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router-dom';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'wwjtxpa2';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dfuh8ucrc/image/upload';

class ChairForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      address: '',
      about: '',
      lat: 0,
      lng: 0,
      image_url: '',
      image: [],
      accepting_guests: true,
      user_id: props.currentUser.id
    };

    this.submitting = false;

    this.geocoder = new google.maps.Geocoder;
    this.update = this.update.bind(this);
    this.geocodeLocation = this.geocodeLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.errors.length > 0) {
      const $link = $('.formBody .button');
      $link.html('Create Chair');
      $link.css('padding-top', '8px');
      $link.css('padding-bottom', '8px');
      this.submitting = false;
    }

    if(newProps.lastChairId !== null && newProps.lastChairId !== "undefined" ) {
      this.props.history.push(`/chairs/${newProps.lastChairId}/description`);
      this.props.closeModal();
    }
  }

  update(field) {
    return function(e) {
      e.preventDefault();
      this.setState({[field]: e.currentTarget.value});
    }.bind(this);
  }

  onDrop(image) {
    this.setState({
      image
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.submitting) {
      return;
    } else {
      this.submitting = true;
      const $link = $(e.target);
      $link.addClass('activated');
      let height = $link.height();
      $link.html('');
      $link.css('padding-top', '4px');
      $link.css('padding-bottom', '4px');
      let $loader = $(`<div class='loader'></div>`);
      $loader.height((height - 4));
      $loader.width(height - 4);
      $link.append($loader);
      this.uploadImage();
    }
  }

  uploadImage() {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', this.state.image);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.state.image_url = response.body.secure_url;
        this.state.image = [];
      }

      this.geocodeLocation();
    });
  }

  geocodeLocation() {
    this.geocoder.geocode(
      { 'address': this.state.address},
      (results, status) => {
        if (status === 'OK') {
          this.state.lat = results[0].geometry.location.lat();
          this.state.lng = results[0].geometry.location.lng();
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
        this.props.createChair(this.state);
      }
    );
  }

  toggleChecked() {
    this.setState({accepting_guests: !this.state.accepting_guests});
  }

  render() {
    const { errors, create, closeModal } = this.props;

    return(
      <form className='baseForm' style={{'marginBottom' : '20px'}}>
        { create ? (
          <div className='formHeader'>
            <h2>Create your chair</h2>
            <p onClick={closeModal}>X</p>
          </div>
        ) : '' }

        { errors.length > 0 ? (
            <ul className='errorList'>
              {errors.map((err, i) => (
                <li
                  className='errorMessage'
                  key={`err` + i}>{err}</li>
              ))}
            </ul>
          ) : ''
        }

        <div className='formBody'>
          <input
            onChange={this.update('description')}
            placeholder='Title'
            value={this.state.description}></input>

          <input
            onChange={this.update('address')}
            placeholder='Address'
            value={this.state.address}></input>

          <div className='checkbox-div'>
            <input
              type='checkbox'
              checked={this.state.accepting_guests}
              onChange={this.toggleChecked.bind(this)} />
            I am currently accepting guests<br/>
          </div>

          <textarea
            onChange={this.update('about')}
            placeholder='About'
            value={this.state.about}></textarea>

          <div className='dropZone-container'>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onDrop.bind(this)} >
              { this.state.image.length > 0 ? (
                <img className="image-holder" src={this.state.image[0].preview} />
              ) : (
                <div className="placeholder">
                  <span>Please upload an image!</span>
                </div>
              ) }
            </Dropzone>
          </div>

          <a className='button button-blue'
            onClick={this.handleSubmit}>
            Create Chair
          </a>
        </div>

      </form>
    );
  }
}

export default withRouter(ChairForm);
