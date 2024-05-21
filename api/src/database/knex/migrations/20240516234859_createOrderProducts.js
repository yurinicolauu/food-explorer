exports.up = knex => knex.schema.createTable('order_products', table => {
  table.increments('id').primary()
  
  table.integer('order_id').references('id').inTable('orders').onDelete('CASCADE')
  table.integer('product_id').references('id').inTable('products')

  table.integer('quantity').notNullable().defaultTo(1)
  table.decimal('product_price', 10, 2).notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('order_products')