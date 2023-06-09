const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        unique: true, 
        require: true, 
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ 
    },
    thoughts: [
        { type: Schema.Types.ObjectId, ref: 'thought' }
    ],
    friends: [
        { type: Schema.Types.ObjectId, ref: 'user' }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema)

module.exports = { User };
