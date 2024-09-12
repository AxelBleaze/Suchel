import factory from '@adonisjs/lucid/factories'
import Product from '#models/product'

enum StatusType {
  MANUFACTORING = "MANUFACTORING",
  DEVELOPMENT = "DEVELOPMENT"
}

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      name: faker.commerce.productName(),
      grammage: faker.number.float(),
      ueb_producer: faker.company.name(),
      status: faker.helpers.arrayElement(Object.values(StatusType)),
      marketing_destination: faker.commerce.productName(),
      composition: faker.lorem.sentence(),
      specs: faker.commerce.productName(),
      raw_material_standards: faker.commerce.productName(),
      packaging_material_standards: faker.commerce.productName(),
      manufacturing_procedures: faker.commerce.productName()
    }
  })
  .build()
