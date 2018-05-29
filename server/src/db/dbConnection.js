/*
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */
var mongoose = require("mongoose"); // The reason for this demo.
mongoose.Promise = require('q').Promise;
var uriString = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/recipe';
mongoose.connect(uriString, function (err, conn) {
    if (err) {
        console.log ('ERROR connecting to: ' + uriString + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uriString);
    }
});
