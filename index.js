const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setting up the app
const app = express();
var kyo_admin='<Username?>:<Password?>';
//connecting to mongoDB 
mongoose.connect('mongodb+srv://'+{kyo_admin}+'@cluster-kyo.vqnss.mongodb.net/REST_API?retryWrites=true&w=majority')
mongoose.Promise = global.Promise;

//front-end static requests
app.use(express.static('public'));

//using body-parser as a middleware 
app.use(bodyParser.json());

//intializing routes
app.use('/api',routes);

//Error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err._message});
})
//listening to a port
app.listen(process.env.PORT || 4000, function(){
    console.log('Express has setup successfully!');
})