const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Todo = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    status: {
        type: Boolean,
        default: true,
    },

}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Todo', Todo);
