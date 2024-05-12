exports.up = knex => knex.schema.createTable('orders', table => {
  table.increments('id').primary()

  table.string('description').notNullable()
  table.decimal('price', 10, 2).notNullable()
  table.enum('status', ['Cancelado','Pendente', 'Preparando', 'Entregue'], { useNative: true, enumName: 'status' }).notNullable().default('Pendente')
  
  table.integer('user_id').references('id').inTable('users')

  table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('orders')