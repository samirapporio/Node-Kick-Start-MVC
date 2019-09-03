const merchants = require('./merchants');
const config = require('./config');
const status = require('./status');
const departments = require('./departments');
const visitorTypes = require('./visitorTypes');
const apilogs = require('./apilogs');
const documents = require('./documents');
const vehicleTypes = require('./vehicleTypes');
const pivot_visitors_visits = require('./pivot_visitors_visits');
const visites = require('./visites');
const users = require('./users');
const visitors = require('./visitors');

module.exports = {

    m_db_schemas:{
        db_vms:{merchants,config,status,departments,visitorTypes, apilogs, documents,vehicleTypes, pivot_visitors_visits, visites, users, visitors},
        db_test:{merchants,config,status,departments,visitorTypes, apilogs, documents,vehicleTypes, pivot_visitors_visits, visites, users, visitors}
    }

}