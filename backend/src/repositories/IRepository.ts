export interface IRepository {
  save(
    collectionReference: { collection: string; document: string },
    data: any
  ): Promise<any>
  update(
    collectionReference: { collection: string; document: string },
    data: any
  ): Promise<any>
  list(offset: string): Promise<any>
  read(collectionReference: {
    collection: string
    document: string
  }): Promise<any>
}
