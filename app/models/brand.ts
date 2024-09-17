import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasMany } from '@adonisjs/lucid/orm'
import Product from './product.js'

export default class Brand extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public name: string

  @column()
  public image: string

  @column()
  public disclaimer: string

  @column()
  public color_description: string

  @column()
  public expedient: string

  @column()
  public request_date: Date

  @column()
  public priorities: string

  @column()
  public niza_class: string

  @column()
  public title: string

  @column()
  public direction: string

  @column()
  public representative: string

  @column()
  public administrative_status: string

  @column()
  public publication: string

  @column()
  public registry_number: string

  @column()
  public registry_date: Date

  @column()
  public validity_date: Date

  @column()
  public expiration_date: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Product)
  declare products: HasMany<typeof Product>
}



