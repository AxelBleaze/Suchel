// import type { HttpContext } from '@adonisjs/core/http'

import Brand from '#models/brand'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import {
  createBrandValidator,
  updateBrandValidator
} from '#validators/brand_validator'


export default class BrandsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const brands = await Brand.all()
    return view.render('pages/backend/brands/index', { brands })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/backend/brands/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    //const payload = await request.validateUsing(createBrandValidator)

    const brand = new Brand()
    brand.name = request.input('name')
    brand.image = request.input('image')
    brand.disclaimer = request.input('disclaimer')
    brand.color_description = request.input('color_description')
    brand.expedient = request.input('expedient')
    brand.request_date = request.input('request_date')
    brand.priorities = request.input('priorities')
    brand.niza_class = request.input('niza_class')
    brand.title = request.input('title')
    brand.direction = request.input('direction')
    brand.representative = request.input('representative')
    brand.administrative_status = request.input('administrative_status')
    brand.publication = request.input('publication')
    brand.registry_number = request.input('registry_number')
    brand.registry_date = request.input('registry_date')
    brand.validity_date = request.input('validity_date')
    brand.expiration_date = request.input('expiration_date')
    //await payload.image.move(app.makePath('storage/uploads'))

    await brand.save()

    /*session.flash('notification', {
      type: 'success',
      message: 'Se guardo correctamente la marca'
    })*/

    return brand//response.redirect().toPath('/brands')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await Brand.findOrFail(params.id)
  }

  /**
   * Edit individual record
   */
  async edit({ params , view }: HttpContext) {
    const brand = await Brand.findOrFail(params.id)
    return view.render('pages/backend/brands/edit', { brand } )
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const brand = await Brand.findOrFail(params.id)
    brand.name = request.input('name')
    brand.image = request.input('image')
    brand.disclaimer = request.input('disclaimer')
    brand.color_description = request.input('color_description')
    brand.expedient = request.input('expedient')
    brand.request_date = request.input('request_date')
    brand.priorities = request.input('priorities')
    brand.niza_class = request.input('niza_class')
    brand.title = request.input('title')
    brand.direction = request.input('direction')
    brand.representative = request.input('representative')
    brand.administrative_status = request.input('administrative_status')
    brand.publication = request.input('publication')
    brand.registry_number = request.input('registry_number')
    brand.registry_date = request.input('registry_date')
    brand.validity_date = request.input('validity_date')
    brand.expiration_date = request.input('expiration_date')
    await brand.save()
    return brand
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const brand = await Brand.findOrFail(params.id)
    await brand.delete()
    return brand
  }
}
