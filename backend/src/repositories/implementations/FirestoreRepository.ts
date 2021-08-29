import { IRepository } from '../IRepository'
import admin from 'firebase-admin'

class FirestoreRepository implements IRepository {
  private client: admin.app.App

  constructor() {
    this.client = admin.initializeApp({
      credential: admin.credential.cert(
        // eslint-disable-next-line import/no-absolute-path
        require('E:/Users/alexa/Documents/GCP/kittybox.json')
      )
    })
  }

  update(
    collectionReference: { collection: string; document: string },
    data: any
  ): Promise<any> {
    return this.client
      .firestore()
      .collection(collectionReference.collection)
      .doc(collectionReference.document)
      .update(data)
  }

  async save(
    collectionReference: { collection: string; document: string },
    data: any
  ): Promise<any> {
    return this.client
      .firestore()
      .collection(collectionReference.collection)
      .doc(collectionReference.document)
      .set(data)
  }

  async list(): Promise<any> {
    const query = await this.client
      .firestore()
      .collection('posts')
      .orderBy('created_at', 'asc')
      .startAt(0)
      .limit(30)
      .get()

    return {
      per_page: query.size,
      posts: query.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }
  }
}

export default new FirestoreRepository()
