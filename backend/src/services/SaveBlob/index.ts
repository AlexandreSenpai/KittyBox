import FirestoreRepository from '../../repositories/implementations/FirestoreRepository'
import { CloudStorage } from '../../storages/implementations/CloudStorage'
import { SaveBlobController } from './SaveBlobController'
import { SaveBlobUseCase } from './SaveBlobUseCase'

const storage = new CloudStorage('kittybox-blob-cdn', 'KittyBox')
const repository = FirestoreRepository
const saveBlobUseCase = new SaveBlobUseCase(storage, repository)
const saveBlobController = new SaveBlobController(saveBlobUseCase)

export { saveBlobController, saveBlobUseCase }
