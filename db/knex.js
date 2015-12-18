
// tell knex what environment we're in:
var env = process.env.NODE_ENV || 'development';

// require assumes the extension is .js so no need to specify that
var config = require('../knexfile')[env];

// export the knex module which requires the configuration ^
module.exports = require('knex')(config);




