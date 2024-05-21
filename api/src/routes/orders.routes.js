const { Router } = require('express')
const OrdersController = require('../controllers/OrdersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization')

const ordersRoutes = Router()

const ordersController = new OrdersController()

ordersRoutes.use(ensureAuthenticated)

ordersRoutes.post('/', ordersController.create)
ordersRoutes.get('/', ordersController.index)
ordersRoutes.get('/:id', ordersController.show)
ordersRoutes.patch(
	'/:id',
	verifyUserAuthorization('admin'),
	ordersController.update
)

module.exports = ordersRoutes
