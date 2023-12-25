const Router = require('express');
const router = new Router();
const regionsController = require('../controllers/regionsController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/createRegions', regionsController.createRegions);
router.post('/updateRegions', regionsController.updateRegions);
router.delete('/delete/:id', checkRole('ADMIN'),  regionsController.deleteRegions);
router.get('/getAllRegions', regionsController.getAllRegions)
router.get('/getOneRegions/:city', regionsController.getOneRegions);

module.exports = router;