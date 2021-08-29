import { IRepository } from '../../repositories/IRepository'
import { IListPostsDTO } from './ListPostsDTO'

export class ListPostsUseCase {
  constructor(private repository: IRepository) {}

  async execute(): Promise<void> {
    return this.repository.list()
  }
}
