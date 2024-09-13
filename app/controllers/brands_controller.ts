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
  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createBrandValidator)

    const brand = new Brand()    
    brand.name = payload.name
   
    brand.image = payload.image.clientName
    await payload.image.move(app.makePath('storage/uploads'))

    await brand.save()

    session.flash('notification', {
      type: 'success',
      message: 'Se guardo correctamente la marca'
    })
  
    return response.redirect().toPath('/brands')
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