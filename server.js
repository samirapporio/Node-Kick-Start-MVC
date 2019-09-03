const server = require('./server/config/app')();
const config = require('./server/config/env_config/config');
const db = require('./server/config/db');
const path = require('path');

//server
server.create(config, db);
server.start();