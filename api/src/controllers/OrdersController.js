const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class OrdersController {
	async create(request, response) {
		const { orderProducts } = request.body
		const user_id = request.user.id

		const [order_id] = await knex('orders').insert({
			user_id,
			status: 'Pendente',
		})

		const orderProductsInsert = orderProducts.map(
			({ product_id, quantity, product_price }) => {
				return {
					product_id,
					order_id,
					quantity,
					product_price,
				}
			}
		)

		await knex('order_products').insert(orderProductsInsert)

		return response.status(201).json('Pedido criado com sucesso!')
	}

	async index(request, response) {
		const { id: user_id, role } = request.user

		if (role === 'admin') {
			const orders = await knex('orders').orderBy('created_at')

			return response.json(orders)
		} else {
			const orders = await knex('orders')
				.where({ user_id })
				.orderBy('created_at')

			return response.json(orders)
		}
	}

	async update(request, response) {
		const { status } = request.body
		const { id } = request.params

		const order = await knex('orders').where({ id }).first()

		if (!order) {
			return new AppError('Pedido não encontrado!', 404)
		} else {
			await knex('orders').update({ status }).where({ id })

			return response.json('Status do pedido atualizado!')
		}
	}

	async show(request, response) {
		const { id: user_id, role } = request.user
		const { id } = request.params

		console.log(user_id)
		console.log(role)

		if (role === 'admin') {
			const order = await knex('orders').where({ id }).orderBy('created_at')

			return response.json(order)
		} else {
			const order = await knex('orders')
				.where({ id, user_id })
				.orderBy('created_at')

			return response.json(order)
		}
	}
}

module.exports = OrdersController
