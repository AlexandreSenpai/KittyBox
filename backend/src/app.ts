import 'reflect-metadata'
import express from 'express'
import { router } from './routes'
import { httpLogger, logger } from './logger'
import { errorHandler, logErrors } from './middlewares'
import cors from 'cors'

logger.info('Initializing Application.')
const app = express()

app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

app.use(httpLogger)
app.use(logErrors)
app.use(errorHandler)

app.use(router)

export { app, logger }
