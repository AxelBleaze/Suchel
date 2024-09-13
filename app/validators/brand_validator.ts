import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new brand.
 */
export const createBrandValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(30),
    image: vine.file({
      size: '2mb',
      extnames: ['jpg', 'png']
    })
  })
)

/**
 * Validator to validate the payload when updating
 * an existing brand.
 */
export const updateBrandValidator = vine.compile(
  vine.object({})
)