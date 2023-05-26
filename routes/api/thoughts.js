const router = require('express').Router();

// localhost:4001/api/thoughts/
router.route('/')
    .get()
    .post()
// GET all thoughts
// POST create a new thought

// localhost:4001/thoughts/:thoughtId/
router.route('/:thoughtId')
    .get()
    .put()
    .delete()
// GET a single thought by _id
// PUT update a thought by _id
// DELETE a thought by _id

// localhost:4001/api/thoughts/:thoughtId/reactions/
router.route('/:thoughtId/reactions')
    .post()
    .delete()
// POST a reaction to thoughts reaction array
// DELETE a reaction from thoughts reaction array

module.exports = router;