require('dotenv/config')
require('express-async-errors')
const express = require('express')
const routes = require('./routes')
const AppError = require('./utils/AppError')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())

app.use(routes)
app.use(cookieParser())
app.use((error, request, response, next) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			status: 'error',
			message: error.message,
		})
	}

	console.error(error)

	return response.status(500).json({
		status: 'error',
		message: 'Internal server error',
	})
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
