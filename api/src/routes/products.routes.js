const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')
const ProductsController = require('../controllers/ProductsController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization')

const productsController = new ProductsController()

const upload = multer(uploadConfig.MULTER)

const productsRoutes = Router()

productsRoutes.use(ensureAuthenticated)

productsRoutes.get('/', productsController.index)
productsRoutes.post(
  '/',
  verifyUserAuthorization(['admin']),
  upload.single('image'),
  productsController.create
)
productsRoutes.get('/:id', productsController.show)
productsRoutes.put(
  '/:id',
  verifyUserAuthorization(['admin']),
  upload.single('image'),
  productsController.update
)
productsRoutes.delete(
  '/:id',
  verifyUserAuthorization(['admin']),
  productsController.delete
)

module.exports = productsRoutes
