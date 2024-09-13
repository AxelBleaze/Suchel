// import type { HttpContext } from '@adonisjs/core/http'

import Brand from '#models/brand'
import type { HttpContext } from '@adonisjs/core/http'

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
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const brand = new Brand()
    brand.name = request.input('name')
    brand.image = request.input('image')
    await brand.save()
    return brand
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
  async edit({ params }: HttpContext) {}

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