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

router.on('/').render('pages/frontend/home')
router.on('/admin').render('pages/backend/dashboard')

router.resource('products', ProductsController)
router.resource('brands', BrandsController)
