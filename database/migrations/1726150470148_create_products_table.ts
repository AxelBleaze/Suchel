import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('grammage')
      table.string('ueb_producer')
      table.enu('status', ['MANUFACTORING', 'DEVELOPMENT'])   
      table.string('marketing_destination')
      table.text('composition')
      table.string('specs')
      table.string('raw_material_standards')
      table.text('packaging_material_standards')
      table.text('manufacturing_procedures')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}