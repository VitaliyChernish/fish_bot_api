const Router = require('express');
const router = new Router();
const windTempData = require('../controllers/windTempController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/createWindTemp', windTempData.createWindTemp);
router.get('/getAllWindTemp', windTempData.getAllWindTemp);
router.get('/getOneWindTemp/:city', windTempData.getOneWindTemp);

module.exports = router;