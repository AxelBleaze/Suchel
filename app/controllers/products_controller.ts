import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Product.all()
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const product = new Product()
    product.name = request.input('title')
    product.grammage = request.input('grammage')
    product.ueb_producer = request.input('ueb_producer')
    product.status = request.input('status')
    product.marketing_destination = request.input('marketing_destination')
    product.composition = request.input('composition')
    product.specs = request.input('specs')
    product.raw_material_standards = request.input('raw_material_standards')
    product.packaging_material_standards = request.input('packaging_material_standards')
    product.manufacturing_procedures = request.input('manufacturing_procedures')
    await product.save()
    return product
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await Product.findOrFail(params.id)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    product.name = request.input('title')
    product.grammage = request.input('grammage')
    product.ueb_producer = request.input('ueb_producer')
    product.status = request.input('status')
    product.marketing_destination = request.input('marketing_destination')
    product.composition = request.input('composition')
    product.specs = request.input('specs')
    product.raw_material_standards = request.input('raw_material_standards')
    product.packaging_material_standards = request.input('packaging_material_standards')
    product.manufacturing_procedures = request.input('manufacturing_procedures')
    await product.save()
    return product
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return product
  }
}