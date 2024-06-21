const knex = require('../database/knex')
const DiskStorage = require('../providers/DiskStorage')

class ProductsController {
  async create(request, response) {
    const { name, description, category, price } = request.body
    const ingredients = JSON.parse(request.body.ingredients)

    console.log(request.file)
    const imageFileName = request.file.filename
    const diskStorage = new DiskStorage()
    const filename = await diskStorage.saveFile(imageFileName)

    const [product_id] = await knex('products').insert({
      name,
      description,
      category,
      price,
      image: filename,
    })

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        product_id,
        name: ingredient,
      }
    })

    await knex('ingredients').insert(ingredientsInsert)

    return response.status(201).json('Produto cadastrado com sucesso!')
  }

  async update(request, response) {
    const { name, description, category, price, ingredients } = request.body
    const { id } = request.params

    const { image } = await knex('products').where({ id }).first()

    const product = {
      name,
      description,
      category,
      price,
      image,
    }

    if (request.file) {
      const diskStorage = new DiskStorage()

      await diskStorage.deleteFile(image)

      const imageFileName = request.file.filename
      const filename = await diskStorage.saveFile(imageFileName)

      product.image = filename
    }

    await knex('products').update(product).where({ id })

    await knex('ingredients').where({ product_id: id }).delete()

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        product_id: id,
        name: ingredient,
      }
    })

    await knex('ingredients').insert(ingredientsInsert)

    return response.json('Produto atualizado com sucesso!')
  }

  async show(request, response) {
    const { id } = request.params

    const product = await knex('products').where({ id }).first()
    const ingredients = await knex('ingredients')
      .where({ product_id: id })
      .orderBy('name')

    return response.json({ ...product, ingredients })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('products').where({ id }).delete()

    return response.json('Produto deletado com sucesso!')
  }

  async index(request, response) {
    const { search, category } = request.query
    if (!search == '') {
      let productsByIngredients = await knex('products')
        .innerJoin('ingredients', 'products.id', 'ingredients.product_id')
        .whereLike('ingredients.name', `%${search}%`)
        .where('products.category', category)
        .select([
          'products.id',
          'products.image',
          'products.name',
          'products.description',
          'products.price',
        ])

      let productsByName = await knex('products')
        .whereLike('name', `%${search}%`)
        .where('products.category', category)
        .select(['id', 'image', 'name', 'description', 'price'])

      const combinedProducts = [...productsByIngredients, ...productsByName]
      const uniqueProducts = Array.from(
        new Map(combinedProducts.map(item => [item.id, item])).values()
      )

      return response.json(uniqueProducts)
    } else {
      const products = await knex('products')
        .where('category', category)
        .select(['id', 'image', 'name', 'description', 'price'])
      return response.json(products)
    }
  }
}

module.exports = ProductsController
