const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todoApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// 2. Define schema
const table = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

// 3. Create model
const database = mongoose.model('user', table);

// 4. Export it
module.exports = database;
