import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'brands'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('image')
      table.string('disclaimer')
      table.string('color_description')
      table.string('expedient')
      table.date('request_date')
      table.string('priorities')
      table.text('niza_class')
      table.string('title')
      table.text('direction')
      table.string('representative')
      table.string('administrative_status')
      table.string('publication')
      table.string('registry_number')
      table.date('registry_date')
      table.date('validity_date')
      table.date('expiration_date')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
