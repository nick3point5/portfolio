const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://nick3point5:Nch5ZgteIRb8@default.atumn.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connectionString, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected`);
});
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connected error `+err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
