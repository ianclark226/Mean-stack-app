const mongoose = require('mongoose');

const URI = "mongodb+srv://ian123:warpmaster7@cluster0.gc4p2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, { 
    useUnifiedTopology: true,  
    useNewUrlParser: true   
});
    console.log('db connected...');
}

module.exports = connectDB;