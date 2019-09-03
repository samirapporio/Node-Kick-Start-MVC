const apiRoutes = require('./apis');


const init = (server) => {
    server.use('*', (req, res, next) => {
        console.log('Request was made to : ' + req.method + " -> " + req.originalUrl+ '\n*******************');
        next();
    });

    server.use('/api', apiRoutes);
};




module.exports = {
    init: init
};