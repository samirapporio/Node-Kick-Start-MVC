const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");


module.exports = function () {
    let server =  express(),
        create,
        start;

    create = (config, db) => {
        let routes = require('../routes');

        server.set('env', config.env);
        server.set('hostname', config.hostname);
        server.set('port', config.port);


        //CORS
        server.options('*', cors());
        server.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
            next();
        });


        //middleware
        server.use('/public', express.static(path.join(__dirname, '../', 'public')));
        server.use(bodyParser.json({
            limit: '50mb',
            extended: true
        }));
        server.use(expressValidator());
        server.use(
            bodyParser.urlencoded({
                extended: false
            })
        );

        mongoose.connect(db.database_vms_test, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify:false})
            .then((ress) => {
                console.log('#####---> Mongo DB Connected!');
                // pivotModel.updateMany({}, { date: "06-07-2019" }).then(()=>{
                //     console.log("Update Successfully")
                // }).catch((e)=>{
                //     console.log("Exception caught",e.message)
                // });
            })
            .catch(err => {console.log("Error *****: " + err);});


        // userModel.deleteMany({type:2}).exec().then(()=>{console.log("user removed")}).catch((e)=>{console.log("problem in removal")});

        //Routes
        routes.init(server);
    };



    start = () => {
        let hostname = server.get("hostname"),
            port = server.get("port");

        server.listen(port, () => {
            console.log(
                "Express Server is listening on - https://" + hostname + ":" + port
            );
        });
    };


    return {
        create: create,
        start: start
    };
};