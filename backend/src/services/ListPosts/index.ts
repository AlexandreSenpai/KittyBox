import FirestoreRepository from '../../repositories/implementations/FirestoreRepository'
import { ListPostsController } from './ListPostsController'
import { ListPostsUseCase } from './ListPostsUseCase'

const repository = FirestoreRepository
const listPostsUseCase = new ListPostsUseCase(repository)
const listPostsController = new ListPostsController(listPostsUseCase)

export { listPostsController, listPostsUseCase }
