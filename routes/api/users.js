const router = require('express').Router();

// localhost:4001/api/users/
router.route('/')
    .get()
    .post()
// GET all users
// POST create new user

// localhost:4001/api/users/:userId/
router.route('/:userId')
    .get()
    .put()
    .delete()
// GET user by _id
// PUT update user by _id
// DELETE user by _id

// localhost:4001/api/users/:userId/friends/:friendId/
router.route('/:userId/friends/:friendId')
    .post()
    .delete()
// POST a new friend to user friend list
// DELETE a friend from user friend list

module.exports = router;