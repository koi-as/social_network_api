const mongoose = require('mongoose');

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
const reactionSchema = new mongoose.Schema({
    reactionId: {
        // Use mongoose's ObjectId data type
        // default: set to a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        // date
        // set default to current timestamp
        // use a getter method to format timestamp
    }
})

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    createdAt: {
        // date
        // default value to current timestamp
        // getter method to format timestamp
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        // array of nested reactions created with reactionSchema
    ]
})
