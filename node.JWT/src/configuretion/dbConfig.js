const mongoose = require('mongoose');
const dotenv = require('mongoose');

dotenv.config();
 
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMs: 5000,

}) 
mongoose.connection .on('connected', () => {
    console.log('Connected to database');
});
mongoose.connection.on('error', (err) => {
    console.log('Database error:', err);
});

module.exports = mongoose;