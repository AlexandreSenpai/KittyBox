import { NextFunction, Request, Response } from 'express'
import { logger } from './logger'

export const logErrors = (
  error,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  logger.error(error.stack)
  next(error)
}

export const errorHandler = (
  _error: any,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  response.status(500).send('Error.')
}
