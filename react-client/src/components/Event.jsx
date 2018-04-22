import React from 'react';
import moment from 'moment';

const cell = {
  textAlign: 'center'
}

const Event = ({event, deleteEvent}) => (
  <tr>
    <td style={cell}>{event.eventid}</td>
    <td style={cell}>{event.name}</td>
    <td style={cell}>{event.location}</td>
    <td style={cell}>{moment(event.date).format('YYYY-MM-DD')}</td>
    <td style={cell}>{event.listing[0].price} {event.listing[0].quantity}</td>
    <td style={cell}>{event.listing[1].price} {event.listing[1].quantity}</td>
    <td style={cell}>{event.listing[2].price} {event.listing[2].quantity}</td>
    <td style={cell}><button onClick={() => deleteEvent(event.eventid)}>DELETE</button></td>
  </tr>
)

export default Event;