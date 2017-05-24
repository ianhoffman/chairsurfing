import React from 'react';
import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router-dom';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'wwjtxpa2';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dfuh8ucrc/image/upload';

class ChairForm extends React.Component {
  constructor(props) {
    super(props);

    const { chair } = props;

    this.state = {
      id: chair.id,
      description: chair.description,
      address: chair.address,
      about: chair.about,
      lat: chair.lat,
      lng: chair.lng,
      image_url: chair.imageUrl,
      image: [],
      accepting_guests: chair.accepting_guests,
      user_id: props.currentUser.id
    };

    this.submitting = false;

    this.geocoder = new google.maps.Geocoder;
    this.update = this.update.bind(this);
    this.geocodeLocation = this.geocodeLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.submitChair = this.submitChair.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.errors.length > 0) {
      const $link = $('.formBody .button');
      $link.html('Create Chair');
      $link.css('padding-top', '8px');
      $link.css('padding-bottom', '8px');
      this.submitting = false;
    }
  }

  submitChair() {
    if(this.props.chair.user_id !== 'NEW') {
      this.props.updateChair(this.state)
        .then(res => {
          this.props.history.push(`/chairs/${res.id}/description`);
          this.props.closeModal();
        });
    } else {
      this.props.createChair(this.state)
        .then(res => {
          this.props.history.push(`/chairs/${res.id}/description`);
          this.props.closeModal();
        });
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

      if(this.props.chair.user_id !== 'NEW') {
        if(this.state.image.length > 0) {
          this.uploadImage();
        } else if(this.props.chair.address !== this.state.address) {
          this.geocodeLocation();
        } else {
          this.submitChair();
        }
      } else {
        this.uploadImage();
      }
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

      if(this.props.chair.user_id === 'NEW' || (this.props.chair.address !== this.state.adress )) {
        this.geocodeLocation();
      } else {
        this.submitChair();
      }
    });
  }

  geocodeLocation() {
    this.geocoder.geocode(
      { 'address': this.state.address},
      (results, status) => {
        if (status === 'OK') {
          this.state.lat = results[0].geometry.location.lat();
          this.state.lng = results[0].geometry.location.lng();
          this.state.address = results[0].formatted_address;
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }

        this.submitChair();
      }
    );
  }

  toggleChecked() {
    this.setState({accepting_guests: !this.state.accepting_guests});
  }

  render() {
    const { errors, chair, closeModal } = this.props;

    let img;
    let text = 'Create your chair';
    let text2= 'Create chair';
    if(chair.user_id !== 'NEW') {
      text = 'Update your chair';
      text2 = 'Update chair';
    }

    if(this.state.image.length > 0) {
      img = (<img className="image-holder" src={this.state.image[0].preview} />);
    }
    else if(chair.user_id !== 'NEW') {
      img = (<img className="image-holder" src={chair.imageUrl} />);
    }
    else {
      img = (<div className="placeholder">
        <span>Please upload an image!</span>
      </div>);
    }

    return(
      <form className='baseForm' style={{'marginBottom' : '20px'}}>
        <div className='formHeader'>
          <h2>{text}</h2>
          <p onClick={closeModal}>X</p>
        </div>

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
              {img}
            </Dropzone>
          </div>

          <a className='button button-blue'
            onClick={this.handleSubmit}>
            {text2}
          </a>
        </div>

      </form>
    );
  }
}

export default withRouter(ChairForm);
