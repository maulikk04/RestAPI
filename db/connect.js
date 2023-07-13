const mongoose = require('mongoose');

uri = "mongodb+srv://maulik:8ntGf0dcITOHqybc@cluster0.r4mifi0.mongodb.net/Cluster0?retryWrites=true&w=majority" ;

const connectdb =  () =>{
    console.log("Connected to db");
    return mongoose.connect(uri, {useNewUrlParser : true , useUnifiedTopology : true})
}

module.exports = connectdb;