export interface IStorage {
  save(fileName: string, buffer: Buffer): Promise<any>
  getApiEndpoint(): string
  getBucketName(): string
  read(): Promise<any>
}
