import { IRepository } from '../../repositories/IRepository'
import { IStorage } from '../../storages/IStorage'
import { ISaveBlobDTO } from './SaveBlobDTO'
import { v4 as uuidv4 } from 'uuid'
import sizeOf from 'buffer-image-size'
import { firestore } from 'firebase-admin'
import sharp from 'sharp'

export class SaveBlobUseCase {
  private readonly SUPPORTED_VIDEO_MIMES = [
    'video/mp4',
    'video/mpeg',
    'video/ogg',
    'video/webm',
    'video/3gpp',
    'video/x-msvideo',
    'video/x-matroska'
  ]

  private readonly SUPPORTED_IMAGE_MIMES = [
    'image/gif',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp'
  ]

  constructor(private storage: IStorage, private repository: IRepository) {}

  async getBlobDimensionsAndMIME(
    buffer: Buffer
  ): Promise<{ width: number; height: number }> {
    const dimensions = sizeOf(buffer)
    return {
      width: dimensions.width,
      height: dimensions.height
    }
  }

  async getAuthorInformation(
    authorId: string
  ): Promise<firestore.DocumentData> {
    return this.repository.read({
      collection: 'users',
      document: authorId
    })
  }

  async compressImage(buffer: Buffer): Promise<Buffer> {
    return sharp(buffer)
      .webp({
        quality: 10
      })
      .toBuffer()
  }

  async execute(uploadInformation: ISaveBlobDTO): Promise<string> {
    const parsedFileName = `images/user/${uploadInformation.userId}/${uploadInformation.blobFileName}`

    const documentId = uuidv4()

    if (
      this.SUPPORTED_VIDEO_MIMES.includes(uploadInformation.mime) ||
      this.SUPPORTED_IMAGE_MIMES.includes(uploadInformation.mime)
    ) {
      const blobUrl = await this.storage.save(
        parsedFileName,
        uploadInformation.buffer
      )

      const authorInformation = await this.getAuthorInformation(
        uploadInformation.userId
      )

      let dimensions = { width: 0, height: 0 }
      let isImage = false
      if (this.SUPPORTED_IMAGE_MIMES.includes(uploadInformation.mime)) {
        dimensions = await this.getBlobDimensionsAndMIME(
          uploadInformation.buffer
        )

        isImage = true
      }

      await Promise.all([
        this.repository.update(
          {
            collection: 'counters',
            document: 'information'
          },
          {
            entries: firestore.FieldValue.increment(1)
          }
        ),
        this.repository.update(
          {
            collection: 'users',
            document: uploadInformation.userId
          },
          {
            posts: firestore.FieldValue.arrayUnion(documentId)
          }
        ),
        this.repository.save(
          {
            collection: 'posts',
            document: documentId
          },
          {
            name: uploadInformation.blobFileName,
            author: {
              id: authorInformation.id,
              name: authorInformation.name,
              image: authorInformation.image
            },
            src: blobUrl,
            created_at: new Date(),
            description: '',
            tags: [],
            likes: [],
            views: [],
            bookmarks: [],
            dimensions: dimensions,
            mime: uploadInformation.mime,
            is_image: isImage
          }
        )
      ])

      return documentId
    }
  }
}
