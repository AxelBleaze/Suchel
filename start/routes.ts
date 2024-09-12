/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BrandsController from '#controllers/brands_controller'
import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.resource('products', ProductsController)
router.resource('brands', BrandsController)
