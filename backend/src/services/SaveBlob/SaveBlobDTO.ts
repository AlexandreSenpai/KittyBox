export interface ISaveBlobDTO {
  userId: string
  blobFileName: string
  mime: string
  buffer: Buffer
}
