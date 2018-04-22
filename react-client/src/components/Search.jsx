import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.searchEvent(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more events!</h4>
      Enter an eventid: <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search}> Add Event </button>
    </div>)
  }
}

export default Search;
