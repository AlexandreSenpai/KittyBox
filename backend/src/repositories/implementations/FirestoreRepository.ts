import { IRepository } from '../IRepository'
import admin, { firestore } from 'firebase-admin'

class FirestoreRepository implements IRepository {
  private client: admin.app.App

  constructor() {
    this.client = admin.initializeApp({
      credential: admin.credential.applicationDefault()
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

  async list(offset: string): Promise<any> {
    let query = this.client
      .firestore()
      .collection('posts')
      .orderBy('created_at', 'desc')

    if (offset !== 'undefined') {
      const lastDoc = await this.read({
        collection: 'posts',
        document: offset
      })
      query = query.startAfter(lastDoc.created_at)
    }

    const queryResult = await query.limit(60).get()

    return {
      per_page: queryResult.size,
      posts: queryResult.docs.map((doc) => {
        const data = doc.data()
        return {
          ...data,
          created_at: `${data.created_at
            .toDate()
            .toDateString()} at ${data.created_at
            .toDate()
            .toLocaleTimeString()}`,
          id: doc.id
        }
      })
    }
  }

  async read(collectionReference: {
    collection: string
    document: string
  }): Promise<firestore.DocumentData> {
    const data = await this.client
      .firestore()
      .collection(collectionReference.collection)
      .doc(collectionReference.document)
      .get()

    return {
      ...data.data(),
      id: data.id
    }
  }
}

export default new FirestoreRepository()
