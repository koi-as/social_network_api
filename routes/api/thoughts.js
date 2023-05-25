const router = require('express').Router();

// localhost:4001/api/thoughts/
// GET all thoughts
// GET a single thought by _id
// POST create a new thought
// PUT update a thought by _id
// DELETE a thought by _id

// localhost:4001/api/thoughts/:thoughtId/reactions
// POST a reaction to thoughts reaction array
// DELETE a reaction from thoughts reaction array

module.exports = router;