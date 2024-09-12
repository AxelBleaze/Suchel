import factory from '@adonisjs/lucid/factories'
import Brand from '#models/brand'
import { ProductFactory } from './product_factory.js'

export const BrandFactory = factory
  .define(Brand, async ({ faker }) => {
    return {
      name: faker.commerce.productName(),
      image: faker.image.url()
    }
  })
  .relation('products', () => ProductFactory) 
  .build()


  