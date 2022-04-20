const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next){
    console.log(moment().format(), req.path, req.ip)
    next()
})


mongoose.connect("mongodb+srv://Abhijith:Abhijith@cluster0.w7nwz.mongodb.net/FunctionUp?authSource=admin&replicaSet=atlas-darc46-shard-0&readPreference=primary&ssl=true", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
