import express from 'express'
import { config } from 'node-config-ts'
import { AppConfig } from './app'
const startServer = async () => {
	const PORT: number | string = config.port ?? 4000
	const http = express()

	const app = await AppConfig()

	http.use(app)

	http.listen(PORT, () => {
		console.log(`Server is runing on http://localhost:${PORT}`)
	})

}

startServer()

