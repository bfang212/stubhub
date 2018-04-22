const pg = require('pg');
const config = require('../react-client/src/config.js')

const pool = new pg.Pool({
  host     : config.HOST || 'localhost',
  user     : config.USER || 'Ballerholic',
  port     : config.PORT || 5432,
  password : config.PASSWORD || '',
  database : config.DATABASE || 'stubhub'
});

const insertEvent = (eventid, name, location, date) => {
  const query = `INSERT INTO events (eventid, name, location, date) VALUES ('${eventid}', '${name}', '${location}', '${date}');`
  return pool.query(query)
  .catch(err => console.error(err))
};


const deleteEvent = (eventid) => {
  const query = `DELETE FROM EVENTS WHERE eventid = ${eventid};`
  return pool.query(query)
  .catch(err => console.error(err))
};


const selectAll = ()  => {
  const query = `SELECT * FROM EVENTS;`
  return pool.query(query)
  .catch(err => console.error(err))
};

module.exports.selectAll = selectAll;
module.exports.insertEvent = insertEvent;
module.exports.deleteEvent = deleteEvent;

