import React from 'react';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // $('.createChairButton').animate()
  }

  render() {
    const {currentUser} = this.props;

    return(currentUser.chair === 'null') ? (
      <section className='chairButtonContainer'>
        <ReactCSSTransitionGroup
          transitionName='auto'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            <a className='createChairButton button button-blue'>
              Create your chair!
            </a>
        </ReactCSSTransitionGroup>
      </section>
    ) : (
      <a>
        'YOU HAVE A CHAIR'
      </a>
    );

  }
}

export default UserProfile;
