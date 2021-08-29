export interface IRepository {
  save(
    collectionReference: { collection: string; document: string },
    data: any
  ): Promise<any>
  update(
    collectionReference: { collection: string; document: string },
    data: any
  ): Promise<any>
  list(): Promise<any>
}
