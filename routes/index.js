const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const regionsRouter = require('./regionsRouter');
const clientsRoutes = require('./clientRouter')
const visitsRouter = require('./visitsRouter')
const pressureRouter = require('./pressureRouter')
const windTempRouter = require('./windTempRouter')
const woterTempRouter = require('./woterTempRouter')

router.use('/user', userRouter)
router.use('/regions', regionsRouter)
router.use('/clients', clientsRoutes)
router.use('/visit', visitsRouter)
router.use('/pressure', pressureRouter)
router.use('/windTemp', windTempRouter)
router.use('/woterTemp', woterTempRouter)

module.exports = router;