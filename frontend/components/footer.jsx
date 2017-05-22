import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  preventClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <section className='footer'>
        <div className='topLinks'>
          <div className='footerLinks'>
            <a href='#' onClick={this.preventClick}>ABOUT</a>
            <a href='#' onClick={this.preventClick}>SAFETY</a>
            <a href='#' onClick={this.preventClick}>SUPPORT</a>
            <a href='#' onClick={this.preventClick}>BLOG</a>
            <a href='#' onClick={this.preventClick}>SHOP</a>
          </div>
          <div className='languageDiv'>
            <select>
              <option>English</option>
              <option>Javascript</option>
            </select>
          </div>
        </div>
        <div className='midLinks'>
          <div>
            <p>CONNECT WITH US</p>
            <a href='#' id='fb' className='fa fa-facebook socialIcon'></a>
            <a href='#' id='twitter' className='fa fa-twitter socialIcon'></a>
          </div>
          <div>
            <p>MOBILE APPS</p>
            <a href='#' className='fa fa-apple socialIcon'></a>
            <a href='#' className='fa fa-android socialIcon'></a>
          </div>
        </div>
        <div className='copyright'>
          <p>&copy; 2017 Ian Hoffman</p>
          <p>Hire me!</p>
        </div>
      </section>
    );
  }

}

export default Footer;
