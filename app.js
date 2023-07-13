const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ; //port create , default port 5000
const connectdb = require('./db/connect');  // return promise
const route_product = require('./router/product');

app.get('/', (req, res) => {
     res.send('Hello World!');
})

//middleware
app.use('/product',route_product);

const start = async()=>{
    try {

        await connectdb(); // connectdb is function in connectjs;
        app.listen(port , ()=>{
            console.log(`server listening on ${port} `)
        })  
    } catch (error) {
        console.log(error);
    }
} 

start(); 