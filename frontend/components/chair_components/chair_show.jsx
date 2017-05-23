import React from 'react';
import ChairMap from './chair_map';
import RentalFormContainer from '../booking_components/rental_form_container';
import ChairShowMap from './chair_show_map';
import { Link, Route } from 'react-router-dom';

class ChairShow extends React.Component {
  constructor(props) {
    super(props);

    let path = this.props.location.pathname.split('/');
    this.selected = path[path.length - 1];
  }

  componentDidMount() {
    this.props.fetchSingleChair();

    let img = document.getElementsByClassName('img-container')[0];
    let show = document.getElementsByClassName('chair-show')[0];

    if(this.selected==='description') {
      $(img).css('display', 'flex');
    } else if(window.innerWidth <= 1040) {
      $(img).css('display', 'none');
    } else {
      $(img).css('display', 'flex');
    }


    switch (this.selected) {
      case 'description':
        document.getElementById('description').focus();
        $(img).css('display', 'flex');
        if(window.innerWidth <= 1040) {
          $(show).height('100%');
        }
        break;
      case 'location':
        document.getElementById('location').focus();
        if(window.innerWidth <= 1040) {
          $(img).css('display', 'none');
          $(show).height('100%');
        }
        break;
      case 'reviews':
        document.getElementById('reviews').focus();
        if(window.innerWidth <= 1040) {
          $(img).css('display', 'none');
          $(show).height('100%');
        }
        break;
      default:
        break;
    }

    window.addEventListener('resize', () => {
      if($(window).width() > 1040) {
        show = document.getElementsByClassName('img-container')[0];
        $(show).css('display', 'flex');
      }
    });

    window.addEventListener('resize', () => {
      let p, c;
      if(this.selected === null) {
        p = this.props.location.pathname.split('/');
        c = p[p.length - 1];
      } else {
        c = this.selected;
      }
      if($(window).width() <= 1040 && c !== 'description') {
        show = document.getElementsByClassName('img-container')[0];
        $(show).css('display', 'none');
      }
    });

    window.addEventListener('resize', () => {
      let p, c;
      if(this.selected === null) {
        p = this.props.location.pathname.split('/');
        c = p[p.length - 1];
      } else {
        c = this.selected;
      }
      if($(window).width() <= 1040 && c === 'description') {
        show = document.getElementsByClassName('img-container')[0];
        $(show).css('display', 'flex');
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if(parseInt(newProps.match.params.chairId) !== this.props.chair.id) {
      this.props.fetchSingleChair();
    }
  }

  hideImg(e) {
    if(window.innerWidth <= 1040) {
      let img = document.getElementsByClassName('img-container')[0];
      let show = document.getElementsByClassName('chair-show')[0];
      $(img).css('display', 'none');
      $(show).height('100%');
    }
  }

  showImg(e) {
    if(window.innerWidth <= 1040) {
      let img = document.getElementsByClassName('img-container')[0];
      let show = document.getElementsByClassName('chair-show')[0];
      $(img).css('display', 'flex');
      $(show).height('100%');
    }
  }


  render() {
    const { chair } = this.props;

    

    return(
      <section className='content'>
        <section className='chair-show'>
          <section className='chair-info'>
              <h2>
                {chair.description.toUpperCase()}
              </h2>
              <div className='chair-links'>
                <a href={`#/chairs/${chair.id}/description`}
                  onClick={() => {
                    this.selected = 'description';
                    this.showImg.bind(this)();
                  }
                }
                id='description'>Description</a>

              <a href={`#/chairs/${chair.id}/location`}
                onClick={() => {
                  this.selected = 'location';
                  this.hideImg.bind(this)();
                }
              }
              id='location'>Location</a>

            <a href={`#/chairs/${chair.id}/reviews`}
              onClick={() => {
                this.selected = 'reviews';
                this.hideImg.bind(this)();
              }
            }
            id='reviews'>Reviews</a>
        </div>
        <div className='chair-specs'>
          <Route
            path={`/chairs/${chair.id}/description`}
            render={() =>
              <RentalFormContainer
                chair={chair} />} />

              <Route
                path={`/chairs/${chair.id}/location`}
                render={() => <ChairShowMap chair={chair}/>} />
            </div>
        </section>
          <div className='img-container'>
            <img className='chair-img' src={chair.imageUrl} />
          </div>

      </section>
      </section>
    );
  }

}

export default ChairShow;
