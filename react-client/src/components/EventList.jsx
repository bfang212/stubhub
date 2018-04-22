import React from 'react';
import Event from './Event.jsx';

const table = {
  width: '100%'
};



const EventList = ({events, deleteEvent}) => (
  <div>
    <h4>You are following { events.length } events.</h4>
    <br/><br/>
    <table style={table}>
      <tbody>
        <tr>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Location</th>
          <th>Date</th>
          <th>Price and Quantity</th>
          <th>Price and Quantity</th>
          <th>Price and Quantity</th>
          <th>Remove Listing</th>
        </tr>
        { events.map((event, index) => <Event 
        key={index} 
        event={event}
        deleteEvent={deleteEvent}
        />)}
      </tbody>
    </table>
  </div>
)



export default EventList;