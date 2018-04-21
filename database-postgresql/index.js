const pg = require('pg');


const pool = new pg.Pool({
  host     : 'localhost',
  user     : 'Ballerholic',
  port     :  5432,
  database : 'stubhub'
});

const selectAll = ()  => {
  return pool.query(`SELECT * FROM EVENTS;`)
  .catch(err => console.error(err))
};

module.exports.selectAll = selectAll;
