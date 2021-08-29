export const environment_name = process.env.NODE_ENV
  ? process.env.NODE_ENV.trim()
  : 'qa'
export const database_port = process.env.PORT || 3333
