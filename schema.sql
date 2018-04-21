DROP DATABASE IF EXISTS stubhub;

CREATE DATABASE stubhub;

\c stubhub;

DROP TABLE IF EXISTS events;

CREATE TABLE events (
  eventid INT NOT NULL UNIQUE
  -- quantity integer NOT NULL,
  -- description varchar(50) NOT NULL,
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
