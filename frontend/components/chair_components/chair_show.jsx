import React from 'react';
import ChairMap from './chair_map';
import RentalForm from '../booking_components/rental_form';
import ChairShowMap from './chair_show_map';
import { Link, Route } from 'react-router-dom';

class ChairShow extends React.Component {
  componentDidMount() {
    this.props.fetchSingleChair();
    let path = this.props.location.pathname.split('/');
    let curr = path[path.length - 1];
    let img = document.getElementsByClassName('chair-img')[0];
    let show = document.getElementsByClassName('chair-show')[0];

    switch (curr) {
      case 'description':
        document.getElementById('description').focus();
        $(img).css('display', 'block');
        if(window.innerWidth <= 840) {
          $(show).height('auto');
        }
        break;
      case 'location':
        document.getElementById('location').focus();
        if(window.innerWidth <= 840) {
          $(img).css('display', 'none');
          $(show).height('100%');
        }
        break;
      case 'reviews':
        document.getElementById('reviews').focus();
        if(window.innerWidth <= 840) {
          $(img).css('display', 'none');
          $(show).height('100%');
        }
        break;
      default:
        break;
    }

    window.addEventListener('resize', () => {
      if($(window).width() > 840) {
        show = document.getElementsByClassName('chair-img')[0];
        $(show).css('display', 'block');
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if(parseInt(newProps.match.params.chairId) !== this.props.chair.id) {
      this.props.fetchSingleChair();
    }
  }

  hideImg(e) {
    if(window.innerWidth <= 840) {
      let img = document.getElementsByClassName('chair-img')[0];
      let show = document.getElementsByClassName('chair-show')[0];
      $(img).css('display', 'none');
      $(show).height('100%');
    }
  }

  showImg(e) {
    if(window.innerWidth <= 840) {
      let img = document.getElementsByClassName('chair-img')[0];
      let show = document.getElementsByClassName('chair-show')[0];
      $(img).css('display', 'block');
      $(show).height('auto');
    }
  }


  render() {
    const { chair } = this.props;

    return(
      <section className='chair-show'>
        <section className='chair-info'>
          <section className='chair-description'>
            <h2>
              {chair.description.toUpperCase()}
            </h2>
            <div className='chair-links'>
              <a href={`#/chairs/${chair.id}/description`}
                onClick={this.showImg.bind(this)}
                id='description'>Description</a>
              <a href={`#/chairs/${chair.id}/location`}
                onClick={this.hideImg.bind(this)}
                id='location'>Location</a>
              <a href={`#/chairs/${chair.id}/reviews`}
                onClick={this.hideImg.bind(this)}
                id='reviews'>Reviews</a>
            </div>
            <div className='chair-specs'>
              <Route
                path={`/chairs/${chair.id}/description`}
                component={RentalForm} />
              <Route
                path={`/chairs/${chair.id}/location`}
                render={() => <ChairShowMap chair={chair}/>} />
            </div>
          </section>
        </section>
        <section className='chair-img'>
          <div className='chair-container'>
            <img src={chair.imageUrl} />
          </div>
        </section>
      </section>
    );
  }

}

export default ChairShow;
