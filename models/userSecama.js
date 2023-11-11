const mongoose = require("mongoose");

const sechma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    mobile: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
});


const User = mongoose.model("User", sechma, "user"); // Specify the collection name as "user"

module.exports = User;