const router = require('express').Router();
const userRoutes = require('./user-routes');
const policeRoutes = require('./police-routes');

router.use('/users', userRoutes);
router.use('/police', policeRoutes);


module.exports = router;
