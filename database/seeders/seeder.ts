import { BrandFactory } from '#database/factories/brand_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await BrandFactory.with('products', 3).create()
  }
}