import { Request, Response } from 'express'
import { ListPostsUseCase } from './ListPostsUseCase'

export class ListPostsController {
  constructor(private readonly listPostsUseCase: ListPostsUseCase) {}

  async handle(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const rows = await this.listPostsUseCase.execute()

    return response.status(200).json(rows)
  }
}
