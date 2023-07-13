const connectdb = require('./db/connect');
const connect = require('./db/connect');
const product = require('./models/product');
const productjson = require('./product.json');


const start = async () =>{
    try {

        await connectdb(); 
        await product.deleteMany(); //delete previous
        await product.create(productjson);
        console.log("success");
        
    } catch (error) {
        console.log(error);
    }
}
start();