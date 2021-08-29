import { app, logger } from './src/app'
import { environment_name, database_port } from './src/utils/config'

app.listen(database_port, () => {
  logger.info(
    `Connected on ${environment_name} database and listening on port ${database_port}.`
  )
})
