import express from 'express'
import fileUpload from 'express-fileupload'
import morgan from 'morgan'
import router from './routes'

export const AppConfig = async () => {

	const app = express()

	// Settings
	app.use(express.urlencoded({ extended: false }))
	app.use(express.json())

	// Middlewares
	app.use(morgan('dev'))
	app.use(fileUpload({
		limits: { fileSize: 50 * 1024 * 1024 },
	}))

	// Routes
	app.use(router)
	app.use((req, res) => {
		res.status(404)
		res.send({ error: 'Sorry, can\'t find that' })

	})

	return app

}