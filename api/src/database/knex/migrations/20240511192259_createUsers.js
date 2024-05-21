exports.up = knex =>
	knex.schema.createTable('users', table => {
		table.increments('id').primary()

		table.string('name').notNullable()
		table.string('email').notNullable().unique()
		table.string('password').notNullable()
		table
			.enum('role', ['admin', 'customer'], {
				useNative: true,
				enumName: 'roles',
			})
			.notNullable()
			.defaultTo('customer')

		table.timestamp('created_at').defaultTo(knex.fn.now())
		table.timestamp('updated_at').defaultTo(knex.fn.now())
	})

exports.down = knex => knex.schema.dropTable('users')
