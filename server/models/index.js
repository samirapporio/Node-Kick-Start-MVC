const merchants = require('./merchants');
const config = require('./config');
const apilogs = require('./apilogs');

module.exports = {

    m_db_schemas:{
        db_vms:{merchants,config,apilogs,},
        db_test:{merchants,config,apilogs}
    }

}