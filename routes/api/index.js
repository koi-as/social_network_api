const router = require('express').Router();
const usersRoute = require('./users');
const thoughtsRoute = require('./thoughts');

// localhost:4001/api/users
router.use('/users', usersRoute);
// localhost:4001/api/thoughts
router.use('/thoughts', thoughtsRoute);

module.exports = router;