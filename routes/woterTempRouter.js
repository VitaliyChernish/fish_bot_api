const Router = require('express');
const router = new Router();
const woterTempData = require('../controllers/woterTempController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/createWWoterTemp', woterTempData.createWoterTemp);
router.get('/getAllWoterTemp', woterTempData.getAllWoterTemp);
router.get('/getOneWoterTemp/:city', woterTempData.getOneWoterTemp);

module.exports = router;