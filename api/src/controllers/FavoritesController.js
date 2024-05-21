const knex = require('../database/knex')

class FavoritesController {
	async create(request, response) {
		const { product_id } = request.body
		const user_id = request.user.id

		const favorite = await knex('favorites').insert({ user_id, product_id })

		return response.json(favorite)
	}

	async delete(request, response) {
		const { id } = request.params
		const user_id = request.user.id

    await knex('favorites').where({ id, user_id }).delete()

    return response.json('Favorito deletado com sucesso!')
	}
	async index(request, response) {
		const user_id = request.user.id

		const favorites = await knex('favorites')
			.where({ user_id })
			.orderBy('created_at')

		return response.json(favorites)
	}
}

module.exports = FavoritesController
