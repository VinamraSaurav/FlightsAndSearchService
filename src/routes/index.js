const express = require('express');
const router = express.Router();
const v1ApiRoutes = require('./v1/routes');

router.use('/v1', v1ApiRoutes);

module.exports = router;