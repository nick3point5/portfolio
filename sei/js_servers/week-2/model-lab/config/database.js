const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/store';
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
