import { Request, Response } from 'express'
import { ISaveBlobDTO } from './SaveBlobDTO'
import { SaveBlobUseCase } from './SaveBlobUseCase'

export class SaveBlobController {
  constructor(private readonly saveBlobUseCase: SaveBlobUseCase) {}

  async handle(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    // @ts-ignore
    const { originalname, buffer, mimetype } = request?.file

    const { userId } = request.body

    const data: ISaveBlobDTO = {
      userId: userId,
      blobFileName: originalname,
      buffer: buffer,
      mime: mimetype
    }

    try {
      const documentData = await this.saveBlobUseCase.execute(data)
      return response.status(201).json({
        postId: documentData
      })
    } catch (err) {
      return response.status(500).send(err.stack)
    }
  }
}
