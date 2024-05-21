const AppError = require('../utils/AppError.js')
const { hash } = require('bcryptjs')
const knex = require('../database/knex')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const checkUserExists = await knex('users').where({ email })

    if (checkUserExists.length > 0) {
      throw new AppError('Este e-mail já está sendo usado!')
    }

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({ name, email, password: hashedPassword })

    return response.status(201).json('Conta cadastrada com sucesso!')
  }
}

module.exports = UsersController