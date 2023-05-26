const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    newFriend,
    removeFriend
} = require('../../controllers/usersController.js');

// localhost:4001/api/users/
router.route('/')
    .get(getUsers)
    .post(createUser)
// GET all users
// POST create new user

// localhost:4001/api/users/:userId/
router.route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)
// GET user by _id
// PUT update user by _id
// DELETE user by _id

// localhost:4001/api/users/:userId/friends/:friendId/
router.route('/:userId/friends/:friendId')
    .post(newFriend)
    .delete(removeFriend)
// POST a new friend to user friend list
// DELETE a friend from user friend list

module.exports = router;