import React from 'react';

class FilterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
    this.updateKeyword = this.updateKeyword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateKeyword(e) {
    e.preventDefault();
    this.setState({keyword: e.target.value});
    this.props.updateFilter('keyword', e.target.value);
  }

  /*
  We use a link below, but we don't want it to be actually clickalbe--
  we just want access to default link formatting from our css reset.
  */
  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return(
      <form className='filterForm'>
        <input
          onChange={this.updateKeyword}
          value={this.state.keyword}
          placeholder="Search by keyword ('Plush', 'vintage', etc')">
        </input>

        <a
          className='button button-blue'
          onClick={this.handleClick}>
          <i className='fa fa-search'></i>
        </a>
      </form>
    );
  }

}

export default FilterForm;
