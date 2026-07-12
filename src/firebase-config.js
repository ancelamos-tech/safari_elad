import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBGZbYvWH5O8q1k2L3m4N5o6P7q8R9s0T",
  projectId: "safari-elad-triviaaa",
  databaseURL: "https://safari-elad-triviaaa.firebaseapp.com"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
