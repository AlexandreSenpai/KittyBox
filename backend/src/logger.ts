import morgan from 'morgan'
import json from 'morgan-json'
import bunyan from 'bunyan'
import { LoggingBunyan } from '@google-cloud/logging-bunyan'
import { environment_name } from './utils/config'

const loggingBunyan = new LoggingBunyan({
  logName: 'odisseu-persistent-orders-svc'
})
const httpBunyan = new LoggingBunyan({
  logName: 'odisseu-persistent-orders-http-access'
})

const setLoggingStream = {
  dev: [{ stream: process.stdout, level: 'info' }],
  'dev-gcp': [loggingBunyan.stream('info')],
  prd: [loggingBunyan.stream('info')]
}

const setHttpStream = {
  dev: [{ stream: process.stdout, level: 'info' }],
  'dev-gcp': [httpBunyan.stream('info')],
  prd: [httpBunyan.stream('info')]
}

const logger = bunyan.createLogger({
  name: 'odisseu-persistent-orders-svc',
  streams: setLoggingStream[environment_name],
  serializers: {
    req: require('bunyan-express-serializer'),
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err
  },
  level: 'info'
})

const httpLog = bunyan.createLogger({
  name: 'odisseu-persistent-orders-http-access',
  streams: setHttpStream[environment_name],
  serializers: {
    req: require('bunyan-express-serializer'),
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err
  },
  level: 'info'
})

// =================================================================== \\

const morganFormat = json({
  method: ':method',
  url: ':url',
  status: ':status',
  contentLength: ':res[content-length]',
  responseTime: ':response-time'
})

const httpLogger = morgan(morganFormat, {
  stream: {
    write: (message) => {
      const { method, url, status, contentLength, responseTime } =
        JSON.parse(message)
      httpLog.info(
        {
          method,
          url,
          status: Number(status),
          contentLength,
          responseTime: Number(responseTime)
        },
        'HTTP Access log'
      )
    }
  }
})

export { logger, httpLogger }
