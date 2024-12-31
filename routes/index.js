const express = require('express');
const router = express.Router();
const adminRoutes = require('./adminRoutes');
const fieldManagerRoutes = require('./fieldManagerRoutes');
const productionManagerRoutes = require('./productionManagerRoutes');
const warehouseManagerRoutes = require('./warehouseManagerRoutes');




router.use('/admin', adminRoutes);
router.use('/field-Manager', adminRoutes);
router.use('/production-Manager', adminRoutes);
router.use('/warehouse/Manager', adminRoutes);





module.exports = router;