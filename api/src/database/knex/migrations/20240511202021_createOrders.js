exports.up = knex => knex.schema.createTable('orders', table => {
  table.increments('id').primary()

  table.enum('status', ['Cancelado','Pendente', 'Preparando', 'Entregue'], { useNative: true, enumName: 'status' }).notNullable().defaultTo('Pendente')
  
  table.integer('user_id').references('id').inTable('users')

  table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('orders')