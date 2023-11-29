const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController')


router.get('/', adminControllers.admin );
router.get('/create', adminControllers.createget );
router.post('/create', adminControllers.createpost);
router.get('/edit/:id', adminControllers.editget);
router.put('/edit/:id', adminControllers.editput);
router.delete('/delete/:id', adminControllers.deletedelete);


module.exports = router;