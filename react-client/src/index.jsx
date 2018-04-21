import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }

    this.getTicketInfo = this.getTicketInfo.bind(this);

  }

  componentDidMount() {
    this.getTicketInfo();
  }

  getTicketInfo() {
    axios.get('/tickets')
    .then((data) => console.log(data.data.listing.map((listing) => {return listing.listingPrice})))
  }


  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));