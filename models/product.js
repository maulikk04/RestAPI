const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : [true , "Price must be provide"] // it is error message
     },

     featured : {
            type : Boolean,
            default : false
     },
     rating : {
        type : Number,
        default : 4.9
     },

     createdAt : {
        type : Date,
        default : Date.now() // create current date
     },

     company : {
        type : String,
        enum : {
            values : ["Apple", "Microsoft", "Dell", "Google" , "Samsung"],  // only this are allowed
            message : `{VALUE} is not supported`   // if other then values then it will show error message
        },
     },
})

module.exports = mongoose.model('Product', schema);