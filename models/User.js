const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
    profileBoost: Boolean,
    settings: {
        name: String,
        address: String,
        birthday: Date,
        postalCode: Number,
        shortDescription: String,
        description: String,
    },
    profilePicture: {
        data: Buffer,
        contentType: String
    },
},
    {
        collection: 'User'
    })

module.exports = mongoose.model('User', userSchema)
