exports.up = knex => knex.schema.createTable('products', table => {
  table.increments('id').primary()

  table.string('name').notNullable()
  table.string('description').notNullable()
  table.enum('category', ['Refeição', 'Sobremesa', 'Bebida'], { useNative: true, enumName: 'category' }).notNullable().defaultTo('Refeição')
  table.string('image').notNullable()
  table.decimal('price', 10, 2).notNullable()
  table.boolean('active').notNullable().defaultTo(true)

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('products')