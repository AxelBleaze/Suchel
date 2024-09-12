import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Brand from './brand.js'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public name: string

  @column()
  public grammage: string

  @column()
  public ueb_producer: string

  @column()
  public status: string

  @column()
  public marketing_destination: string

  @column()
  public composition: string

  @column()
  public specs: string

  @column()
  public raw_material_standards: string

  @column()
  public packaging_material_standards: string

  @column()
  public manufacturing_procedures: string    

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare brandId: number

  @hasOne(() => Brand)
  declare brand: HasOne<typeof Brand>
}