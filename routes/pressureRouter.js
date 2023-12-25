const Router = require('express');
const router = new Router();
const pressureData = require('../controllers/pressureController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/createPressure', pressureData.createPressure);
router.get('/getAllPressure', pressureData.getAllPressure);
router.get('/getOnePressure/:city', pressureData.getOnePressure);

module.exports = router;