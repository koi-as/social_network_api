const router = require('express').Router();
const apiRoutes = require('./api/index.js');

// localhost:4001/api
router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Wrong route!');
});

module.exports = router;