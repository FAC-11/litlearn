const {Pool} = require('pg');
const url = require('url');
if(process.env) require('env2')('./config.env');

if(!process.env.DATABASE_URL) throw new Error('Environment variable DATABASE_URL must be set');

// if(!auth) throw new Error('Authorisation is required');

const params = url.parse(process.env.DATABASE_URL);
console.log ('db host: ',params.host);

const [username, password] = params.auth.split(':');

  const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.DB_MAX_CONNECTIONS || 2,
    user: username,
    password,
    ssl: params.hostname !== 'localhost',
  }


module.exports = new Pool(options);
