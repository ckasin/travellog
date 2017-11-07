var pgp = require('pg-promise')();

//db connect string
var connectstr = process.env.DATABASE_URL || 'postgres://postgres:aa@localhost:5432/travellog';

var db = pgp(connectstr);

module.exports = db;
