const router = require('express').Router();

// localhost:4001/api/users/
// GET all users
// GET user by _id
// POST create new user
// PUT update user by _id
// DELETE user by _id

// localhost:4001/api/users/:userId/friends/:friendId
// POST a new friend to user friend list
// DELETE a friend from user friend list

module.exports = router;