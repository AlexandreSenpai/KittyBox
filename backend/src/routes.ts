import { Request, Response, Router } from 'express'
import Multer from 'multer'

import { listPostsController } from './services/ListPosts'
import { saveBlobController } from './services/SaveBlob'

const uploadHandler = Multer({
  storage: Multer.memoryStorage()
})

const router = Router()

router.post(
  '/create/blob',
  uploadHandler.single('file'),
  async (request: Request, response: Response) => {
    return saveBlobController.handle(request, response)
  }
)

router.get('/list/posts', async (request: Request, response: Response) => {
  return listPostsController.handle(request, response)
})

export { router }
