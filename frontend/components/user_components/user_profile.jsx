import React from 'react';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserChair(this.props.currentUser.id);
  }

  render() {
    
  }
}

export default UserProfile;
