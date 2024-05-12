exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id').primary()

  table.string('name').notNullable()

  table.integer('product_id').references('id').inTable('products').onDelete('CASCADE')
})

exports.down = knex => knex.schema.dropTable('ingredients')