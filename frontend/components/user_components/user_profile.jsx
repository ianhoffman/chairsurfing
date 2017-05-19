import React from 'react';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser} = this.props;

    return(currentUser.chair === 'null') ? (
      <a className='createChairButton'>
        Create your chair!
      </a>
    ) : (
      <a>
        'YOU HAVE A CHAIR'
      </a>
    );

  }
}

export default UserProfile;
