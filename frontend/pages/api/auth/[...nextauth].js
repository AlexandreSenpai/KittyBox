import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"

import firebase from "firebase/app"
import "firebase/firestore"

const firestore = (
  firebase.apps[0] ??
  firebase.initializeApp({
    apiKey: "AIzaSyB-dc-c1pXIA5mzTIkgQzlvjQ68jyzZE0Q",
    authDomain: "kittybox-324207.firebaseapp.com",
    projectId: "kittybox-324207",
    storageBucket: "kittybox-324207.appspot.com",
    messagingSenderId: "240830845951",
    appId: "1:240830845951:web:603be53318d993e605cdca",
  })
).firestore()

export default NextAuth({
  providers: [
    Providers.Google({
      clientId:
        "240830845951-p94obqsvuijvv2uroc1nvfuk0gqbqatb.apps.googleusercontent.com",
      clientSecret: "rfzeVm_SfQk6trVn7WZdNExr",
    }),
  ],
  adapter: FirebaseAdapter(firestore),
  callbacks: {
    session: function (session, user) {
      session.id = user.id
      return session
    },
  },
})
