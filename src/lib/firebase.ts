import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey:            'AIzaSyBOkAMDQt18RlOtymrcGpOYUnNsSTlWc5Q',
  authDomain:        'phisit-ks.firebaseapp.com',
  projectId:         'phisit-ks',
  storageBucket:     'phisit-ks.firebasestorage.app',
  messagingSenderId: '10006352804',
  appId:             '1:10006352804:web:5f87f9d3283a9ade1da731',
  measurementId:     'G-BZ1DGKBLM9',
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

export const db = getFirestore(app)
