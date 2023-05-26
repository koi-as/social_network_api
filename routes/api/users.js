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

// localhost:4001/api/users/:userId/
router.route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

// localhost:4001/api/users/:userId/friends/:friendId/
router.route('/:userId/friends/:friendId')
    .post(newFriend)
    .delete(removeFriend)

module.exports = router;