import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import EventList from './components/EventList.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: []
    }

    this.getTicketInfo = this.getTicketInfo.bind(this);
    this.searchEvent = this.searchEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    this.getTicketInfo();
  }

  getTicketInfo() {
    axios.get('/events')
    .then((data) => {this.setState({
      events : data.data
    })})
  }

  searchEvent(eventid) {
    axios.post('/events', {
      params: {
        eventid : eventid
      }
    })
    .then(() => {
      this.getTicketInfo()})
  }

  deleteEvent(eventid) {
    axios.delete('/events', {
      params: {
        eventid : eventid
      }
    })
    .then(() => {
      this.getTicketInfo()})
  }


  render () {
    return (<div>
      <h1>Get the latest ticket prices!</h1>
      <Search searchEvent={this.searchEvent}/>
      <EventList 
      deleteEvent={this.deleteEvent}
      events={this.state.events}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));