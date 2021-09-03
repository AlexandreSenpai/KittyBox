import { IStorage } from '../IStorage'
import { Storage, Bucket } from '@google-cloud/storage'

export class CloudStorage implements IStorage {
  private bucket: Bucket
  public projectId: string = 'KittyBox'

  private readonly client: Storage

  constructor(bucketName: string, projectId: string) {
    this.projectId = projectId
    this.client = new Storage({
      projectId: projectId,
      maxRetries: 3
    })
    this.bucket = this.client.bucket(bucketName)
  }

  read(): Promise<any> {
    throw new Error('Method not implemented.')
  }

  getBucketName(): string {
    return this.bucket.name
  }

  getApiEndpoint(): string {
    return this.client.apiEndpoint
  }

  async save(fileName: string, buffer: Buffer) {
    return new Promise((resolve, reject) => {
      const blob = this.bucket.file(fileName)
      const blobStream = blob.createWriteStream()

      blobStream.on('error', (err) => {
        reject(err)
      })

      blobStream.end(buffer)

      blobStream.on('finish', () =>
        resolve(`${this.client.apiEndpoint}/${this.bucket.name}/${fileName}`)
      )
    })
  }
}
